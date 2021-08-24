<template>
  <IntroTemplate>
    <template v-slot:subname>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:clubname>
      <h1>{{ this.club_name }}</h1>
    </template>
  </IntroTemplate>
</template>
<script>
import RouterLinkFullButton from "@/components/FullButton";
import IntroTemplate from "@/views/IntroTemplate";

export default {
  name: "Introduction",
  components: {IntroTemplate, RouterLinkFullButton},
  data() {
    return {
      sub_name: "락을 사랑하는",
      club_name: "Black Saint"
    }
  }
}
</script>
<style scoped>
h1 {
  margin: 0;
}
h3 {
  margin: 0;
}
</style>