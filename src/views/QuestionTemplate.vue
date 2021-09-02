<template>
  <LoadingTemplate :is_loading="is_loading">
    <template v-slot:default>
      <div class="flex-column contentDiv">
        <div class="question">
          <div class="bar">
            <div class="backButton">
              <img src="../assets/back.svg" alt="back" @click="backToPage"/>
            </div>
            <div class="DongBTI">DongBTI</div>
          </div>
          <div style="margin: 0 35px">
            <slot name="question"/>
          </div>
        </div>
        <div class="answer">
          <slot name="answer"/>
        </div>
      </div>
    </template>
  </LoadingTemplate>
</template>

<script>
import router from "@/router";
import LoadingTemplate from "@/views/LoadingTemplate";

export default {
  name: "QuestionTemplate",
  components: {LoadingTemplate},
  props: {
    is_loading: {
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
.contentDiv {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.question {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 2rem;
}

.answer {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.bar {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.backButton {
  position: absolute;
  margin-top: 5px;
  margin-left: 30px;
}

.DongBTI {
  width: 62px;
  height: 35px;
  font-family: 'NanumDdarEGeEomMaGa';
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.87;
  letter-spacing: 0.12px;
  text-align: center;
  color: #582908;
  margin: 0 auto;
}
</style>
