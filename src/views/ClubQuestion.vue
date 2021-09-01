<template>
  <QuestionTemplate :is_loading="is_loading">
    <template v-slot:question>
      <h2>{{this.question}}</h2>
    </template>
    <template v-slot:answer>
      <FullButton v-for="(question, i) in this.data" :key="i"
                  :text="question.answer" @custom-fn="pushNextQuestion(question.path)"
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
          "path":'/'
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
      console.log("getQuestion")
      const res = await this.getData("/question/club?id=" + this.$route.query['id']);
      console.log(res);
      this.question = res.question;
      this.data = this.exceptNull(res.data);
      this.is_loading = false;
    },
    async pushNextQuestion(path) {
      console.log(path);
      router.push("/"+path);
    },
    exceptNull(ls) {
        var i;
        for(i = 0; i < ls.length; i++)
          if(ls[i]['answer'] === "")
            break;
      return ls.slice(0, i);
    }
  },
}
</script>

<style scoped>

</style>
