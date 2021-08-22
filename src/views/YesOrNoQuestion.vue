<template>
  <QuestionTemplate>
    <template v-slot:question>
      <h1>{{ this.question }}</h1>
    </template>
    <template v-slot:answer>
      <RouterLinkFullButton text="Yes" @custom-fn="yesFn"/>
      <RouterLinkFullButton
          text="No"
          bg_color="FDB872"
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
  data() {
    return {
      question: "Active한 활동이 좋다",
    }
  },
  methods: {
    async yesFn() {
      await router.push('/');
    },
    async noFn() {
      await router.push('form');
    },
  },
}
</script>

<style scoped>

</style>
