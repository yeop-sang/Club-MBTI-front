<template>
  <loading-animation v-show="is_loading"/>
  <QuestionTemplate>
    <template v-slot:question>
      <h1 style="margin: 10% 10% 0 10%" v-show="!(is_loading)">{{ this.question }}</h1>
    </template>
    <template v-slot:answer>
      <FullButton text="Yes" @custom-fn="yesFn" v-show="!(is_loading)"/>
      <FullButton
          text="No"
          bg_color="FDB872"
          @custom-fn="noFn"
          v-show="!(is_loading)"
      />
      <div style="margin-bottom: 5%"/>
    </template>
  </QuestionTemplate>
</template>
<script>
import FullButton from "@/components/FullButton";
import router from "@/router";
import QuestionTemplate from "@/views/QuestionTemplate";
import LoadingAnimation from "@/components/LoadingAnimation";

export default {
  name: "YesOrNoQuestion",
  components: {
    LoadingAnimation, QuestionTemplate, FullButton
  },
  created() {
    this.is_loading = true;
    this.getQuestion();
  },
  watch: {
    '$route.query.id': {
      handler: async function () {
        this.is_loading = true;
        await this.getQuestion();
      }
    }
  },
  data() {
    return {
      question: "Active한 활동이 좋다",
      is_loading: true,
      path_yes: '/',
      path_no: '/'
    }
  },

  methods: {
    async yesFn() {
      await router.push(this.path_yes);
    },
    async noFn() {
      await router.push(this.path_no);
    },
    async getQuestion() {
      const res = await this.getData('/question/yesorno?id=' + this.$route.query['id'])
      this.question = res['question']
      const data = res['data'];
      this.path_yes = data[0]['path']
      this.path_no = data[1]['path']
      this.is_loading = false;
    }
  },
}

</script>

<style scoped>

</style>
