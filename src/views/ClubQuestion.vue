<template>
  <loading-animation v-show="is_loading"/>
  <QuestionTemplate>
    <template v-slot:question>
      <h1 v-show="!(is_loading)">{{ this.question }}</h1>
    </template>
    <template v-slot:answer>
      <FullButton
          :key="i"
          v-for="(obj, i) in answer_list"
          :text="obj['answer']"
          @custom-fn="movePage(obj['path'])"
          bg_color="FDB872"
          v-show="!(is_loading)"/>
    </template>
  </QuestionTemplate>
</template>
<script>
import FullButton from "@/components/FullButton";
import router from "@/router";
import QuestionTemplate from "@/views/QuestionTemplate";
import LoadingAnimation from "@/components/LoadingAnimation";

export default {
  name: "ClubQuestion",
  components: {FullButton, LoadingAnimation, QuestionTemplate},
  created() {
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
      question: "대학의 꽃은?",
      is_loading: true,
      answer_list: [
        {
          answer : "Yes",
          path: '/'
        }
      ],
    }
  },
  methods: {
    async getQuestion() {
      const res = await this.getData('/question/club?id='+this.$route.query['id'])
      try {
        this.question = res['question']
        console.log(this.question)
        this.answer_list = res['answer_list']
        console.log(this.answer_list)
      } catch (e) {
        console.error(e)
      }
      this.is_loading = false
    },
    async movePage(to) {
      await router.push(to);
    }
  },
}
</script>

<style scoped>
</style>
