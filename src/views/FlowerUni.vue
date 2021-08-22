<template>
  <QuestionTemplate>
    <template v-slot:question>
      <h1>{{ this.question }}</h1>
    </template>
    <template v-slot:answer>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel1Fn"/>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel2Fn"/>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel3Fn"/>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel4Fn"/>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel5Fn"/>
      <RouterLinkFullButton text="다양한 연구활동" @custom-fn="sel6Fn"/>
    </template>
  </QuestionTemplate>
</template>
<script>
import RouterLinkFullButton from "@/components/FullButton";
import router from "@/router";
import QuestionTemplate from "@/views/QuestionTemplate";
export default {
  name: "FlowerUni",
  components: {QuestionTemplate, RouterLinkFullButton},
  data() {
    return {
      question: "대학의 꽃은?",
    }
  },
  methods: {
    async sel1Fn() {
      await router.push('/');
    },
    async sel2Fn() {
      await router.push('/');
    },
    async se32Fn() {
      await router.push('/');
    },
    async sel4Fn() {
      await router.push('/');
    },
    async sel5Fn() {
      await router.push('/');
    },
    async sel6Fn() {
      await router.push('form');
    },
  },
}
</script>

<style scoped>
</style>