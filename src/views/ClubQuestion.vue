<template>
  <QuestionTemplate :is_loading="is_loading">
    <template v-slot:question>
      <h2>{{ this.question }}</h2>
    </template>
    <template v-slot:answer>
      <FullButton v-for="(question, i) in this.data" :key="i"
                  :text="question.answer_club" @custom-fn="pushNextQuestion(question.path_club)"
      />
    </template>
  </QuestionTemplate>
</template>

<script>
import QuestionTemplate from "@/views/QuestionTemplate";
import FullButton from "@/components/FullButton";
import router from "@/router";

export default {
  name: "ClubQuestion.vue",
  components: {FullButton, QuestionTemplate},
  mounted() {
    this.getQuestion()
  },
  data() {
    return {
      is_loading: true,
      question: "Loading",
      data: [
        {
          "answer": "loading",
          "path": '/'
        }
      ]
    }
  },
  watch: {
    $route() {
      this.is_loading = true;
      this.getQuestion()
    }
  },
  methods: {
    async getQuestion() {
      const res = await this.getData("/question/club?id=" + this.$route.query['id']);
      this.question = res.question;
      this.data = res.answer;
      this.is_loading = false;
    },
    async pushNextQuestion(path) {
      router.push("/" + path);
    },
  },
}
</script>

<style scoped>

</style>
