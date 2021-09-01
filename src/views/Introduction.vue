<template>
  <IntroTemplate>
    <template v-slot:subname>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:clubname>
      <h1>{{ this.club_name }}</h1>
    </template>
    <template v-slot:clubintro>
      <p>{{this.club_intro}}</p>
    </template>
    <template v-slot:activity>
      <ul>
        <li v-for="(activity, i) in activities" :key="i">{{activity}}</li>
      </ul>
    </template>
  </IntroTemplate>
</template>
<script>
//import RouterLinkFullButton from "@/components/FullButton";
import IntroTemplate from "@/views/IntroTemplate";

export default {
  name: "ResultClub",
  components: {IntroTemplate},
  data() {
    return {
      sub_name: "락을 사랑하는",
      club_name: "BlackSaint",
      club_intro: "41년간 쌓아온 동아리 선배님들과 활발한 교류!\n" +
          "음악을 못해도 누구나 지원 가능한 락밴드 동아리",
      activities: ["매학기 정기공연","매방학 교내/외 동아리들과의 연합공연\n",
      "교내 최고(古)의 락밴드 동아리"]
    }
  },
  created() {

  },
  methods: {
    async getClubData() {
      const res = this.getData('/')
      console.log(res)
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
  margin: 5% 10% 0 10%;
  text-align: left;

}
ul {
  width: 100%;
  margin-left: 10%;
  margin-top: 0;
}
</style>
