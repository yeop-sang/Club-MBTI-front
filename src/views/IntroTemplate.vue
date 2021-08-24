<template>
  <div class="flex-column pageDiv">
    <div class="subname">
      <div class="shareButton">
        <img src="../assets/share_icon.svg" alt="share" @click="shareToPage"/>
      </div>
      <slot name="subname"/>
    </div>
    <div class="clubname">

      <slot name="clubname"/>
    </div>
    <div class="clubintro">
      <slot name="clubintro"/>
    </div>
    <h2>동아리 주요활동</h2>
    <div class="activity"></div>
    <div class="answer">
      <slot name="answer"/>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "IntroTemplate",
  methods:{
    async shareToPage() {
      await router.back();
    }
  }
}
</script>

<style scoped>
.pageDiv {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.subname {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.clubname {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.clubintro {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.activity {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.shareButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10%;
}
.answer {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>