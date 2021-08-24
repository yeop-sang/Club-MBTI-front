<template>
  <div class="flex-column" style="align-items: center">
    <h1 class="head">동아리 성향 테스트</h1>
    <p class="subTitle">성향으로 알아보는 추천 동아리</p>
    <img class="ssu_logo" src="../assets/ssu_logo.jpg" alt="숭실대 로고"/>
    <FullButton
        text="지금 성향 테스트하기"
        :is-bottom="true"
        @custom-fn="goQuestion"
    />
  </div>
</template>

<script>
import FullButton from "@/components/FullButton";
import router from "@/router";
export default {
  name: "Welcome",
  components: {FullButton},
  methods: {
    async goQuestion() {
      await router.push('/question/class?id=1');
    }
  },
}
</script>

<style scoped>
.ssu_logo {
  width: 257.7px;
  height: 108.5px;
  padding: 0 0px 0 0;
  margin-top: 90px;
}

.head {
  margin-top: 80px;
  margin-bottom: 10px;
}

.subTitle {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
