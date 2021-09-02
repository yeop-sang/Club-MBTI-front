<template>
  <QuestionTemplate :is_loading="loading">
    <template v-slot:question>
      <h2>{{ this.question }}</h2>
    </template>
    <template v-slot:answer>
      <RouterLinkFullButton text="Yes" @custom-fn="yesFn"/>
      <RouterLinkFullButton
          text="No"
          @custom-fn="noFn"
      />
    </template>
  </QuestionTemplate>
</template>
<script>
import RouterLinkFullButton from "@/components/FullButton";
import router from "@/router";
import QuestionTemplate from "@/views/QuestionTemplate";

export default {
  name: "YesOrNoQuestion",
  components: {QuestionTemplate, RouterLinkFullButton},
  mounted() {
    this.getQuestion();
  },
  watch: {
    $route() {
      this.loading = true;
      this.getQuestion()
    }
  },
  data() {
    return {
      question: "Loading",
      pathList: [
        '/',
        '/'
      ],
      loading: true,
    }
  },
  methods: {
    async yesFn() {
      await router.push('/' + this.pathList[0]);
    },
    async noFn() {
      await router.push('/' + this.pathList[1]);
    },
    async getQuestion() {
      const res = await this.getData("/question/class?id=" + this.$route.query['id']);
      this.question = res.question;
      this.pathList = [res.data[0]['path'], res.data[1]['path']]
      this.loading = false;
    }
  },
}
</script>

<style scoped>

</style>
