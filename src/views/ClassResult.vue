<template>
  <ClassResultTemplate button_text="동아리 추천 받기" >
    <template v-slot:subTitle>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:classImage>
      <div class="stamp">
        {{this.class_name}}
      </div>
    </template>
    <template v-slot:explain>
      <p>{{this.class_intro}}</p>
    </template>
  </ClassResultTemplate>
</template>
<script>
import ClassResultTemplate from "@/views/ResultTemplate";

export default {
  name: "ClassResult",
  components: {ClassResultTemplate},
  mounted() {
    this.getClass();
  },
  data() {
    return{
      sub_name: "Error",
      class_name: "Error",
      class_intro: [],
      is_loading: true
    }
  },
  methods: {
    async getClass() {
      const res = await this.getData('/result/class?id=' + this.$route.query['id'])
      console.log(res);
      this.class_name = res['classname'];
      this.sub_name = res['ClassSubTitle'];
      this.class_intro = res['ClassExplain'];
      // this.class_intro = this.splitString(res['ClassExplain']);
      this.is_loading = false;
    },
    splitString(str) {
      if (typeof str === "string") {
        return str.split('.')
      }
      return []
    }
  },
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
  margin: 2px 10%;
  text-align: left;
  z-index: 0;
  line-height: 1.5rem;
  letter-spacing: 0.8px;
}
.stamp {
  color: #666666;
  border: 1rem double #C4C4C4;
  transform: rotate(-5deg);
  font-size: 50px;
  font-family: "dimibang_new";
  border-radius: 0;
  padding: 0.5rem;
}
</style>
