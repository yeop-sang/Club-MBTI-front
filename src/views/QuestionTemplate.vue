<template>
  <div class="flex-column pageDiv">
    <PacmanLoader v-show="loading"/>
    <div class="question" v-show="!(loading)">
      <div class="backButton">
        <img src="../assets/back.svg" alt="back" @click="backToPage"/>
      </div>
      <slot name="question"/>
    </div>
    <div class="answer" v-show="!(loading)">
      <slot name="answer"/>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import PacmanLoader from "@/components/PackmanLoader";

export default {
  name: "QuestionTemplate",
  components: {PacmanLoader},
  props: {
    loading: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    async backToPage() {
      await router.back();
    },
  },
}
</script>

<style scoped>
.pageDiv {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.question {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.answer {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.backButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin-left: 10%;
}

h {
  margin-top: 0px;
}
</style>
