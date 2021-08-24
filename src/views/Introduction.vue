<template>
  <IntroTemplate>
    <template v-slot:subname>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:clubname>
      <h1>{{ this.club_name }}</h1>
    </template>
    <template v-slot:answer>
      <RouterLinkFullButton text="다시 테스트" bg_color="FDB872" @custom-fn="retestFn"/>
    </template>
  </IntroTemplate>
</template>
<script>
import RouterLinkFullButton from "@/components/FullButton";
import IntroTemplate from "@/views/IntroTemplate";
import router from "@/router";

export default {
  name: "Introduction",
  components: {IntroTemplate, RouterLinkFullButton},
  data() {
    return {
      sub_name: "락을 사랑하는",
      club_name: "Black Saint"
    }
  },
  methods: {
    async retestFn() {
      await router.push('/');
    }
  }
}
</script>