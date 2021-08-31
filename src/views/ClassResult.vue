<template>
  <ClassResultTemplate>
    <template v-slot:subname>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:classname>
      <h1>{{ this.class_name }}</h1>
    </template>
    <template v-slot:classintro>
      <p>{{this.class_intro}}</p>
    </template>
  </ClassResultTemplate>
</template>
<script>
import ClassResultTemplate from "@/views/ClassResultTemplate";

export default {
  name: "ClassResult",
  components: {ClassResultTemplate},
  data() {
    return{
      sub_name: "예술을 사랑하는",
      class_name: "연행예술 분과",
      class_intro: "예술을 사랑하는 당신!\n"+
          "연행예술 분과의 동아리들을 자신있게 추천드립니다."
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
p {
  margin: 5% 10% 0 10%;
  text-align: left;
}
</style>