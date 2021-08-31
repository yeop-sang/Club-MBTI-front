<template>
  <div class="flex-column pageDiv">
    <div class="subname">
      <div class="shareButton">
        <img src="../assets/share_icon.svg" alt="share" @click="shareToPage"/>
      </div>
      <slot name="subname"/>
    </div>
    <div class="classname">
      <slot name="classname"/>
    </div>
    <div class ="classimage">
      <img src="../assets/guitar.jpeg"/>
    </div>
    <div class="classintro">
      <slot name="classintro"/>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  name: "ClassResult",
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
.classname {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.classintro {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.classimage {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin:20%;
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