<template>
  <div class="flex-column" style="align-items: center">
    <h1 class="head">숭실대학교<br/>DongBTI</h1>
    <p class="subTitle">성향으로 알아보는 추천 동아리</p>
    <RouterLinkFullButton
        text="지금 성향 테스트하기"
        :is-bottom="true"
        @custom-fn="goQuestion"
    />
  </div>
</template>

<script>
import RouterLinkFullButton from "@/components/FullButton";
import router from "@/router";
export default {
  name: "Welcome",
  components: {RouterLinkFullButton},
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
  font-family: 'NanumDdarEGeEomMaGa';
  font-size: 50px;
  margin-top: 80px;
  margin-bottom: 10px;
}

.subTitle {
  font-family: 'NanumDdarEGeEomMaGa';
  font-size: 30px;
  margin-top: 41px;
  margin-bottom: 0px;
}
</style>
