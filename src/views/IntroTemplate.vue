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
.pageDiv {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
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
</style>