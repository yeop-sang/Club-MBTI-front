<template>
  <div class="flex-column pageDiv">
    <div class="subTitle">
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
    <div class="ac">
      <h2>동아리 주요활동</h2>
    </div>
    <div class="activity">
      <slot name="activity"/>
    </div>
    <FullButton text="다시 테스트" :is-bottom="true" bg_color="FDB872" @custom-fn="retestFn"/>
  </div>
</template>

<script>
import router from "@/router";
import FullButton from "../components/FullButton";
export default {
  name: "IntroTemplate",
  components: {FullButton},
  methods:{
    async shareToPage() {
      await router.back();
    },
    async retestFn() {
      await router.push('/');
    }
  }
}
</script>

<style scoped>
h2 {
  width: 100%;
  display: flex;
  margin-left: 10%;
}
.ac {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.pageDiv {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
}
.subTitle {
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
  margin-bottom: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.activity {
  text-align: left;
  flex-direction: column;
  width: 100%;
  margin: 0;
}
.shareButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10%;
}
</style>
