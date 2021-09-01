<template>
  <ResultTemplate :button_bottom="true" button_text="다시 성향 테스트" :is_loading="is_loading">
    <template v-slot:resultTitle>
      <h1>{{ this.club_name }}</h1>
      <p>{{ this.club_explain }}</p>
    </template>
    <template v-slot:explain>
      <div style="display: flex; margin-top: 20px; flex-direction: row; justify-content: flex-start; margin-left: 10%">
        <h2>동아리 주요활동</h2>
      </div>
      <div style="display:flex; width: 100%;">
        <ul>
          <li v-for="(activity, i) in activities" :key="i" style="text-align: left">{{ activity }}</li>
        </ul>
      </div>
    </template>
  </ResultTemplate>
</template>
<script>
import ResultTemplate from "@/views/ResultTemplate";
// import FullButton from "@/components/FullButton";

export default {
  name: "ResultClub",
  components: {ResultTemplate},
  data() {
    return {
      club_name: "Loading",
      club_explain: "loading",
      activities: ['loading'],
      is_loading: true,
    }
  },
  mounted() {
    this.getClubData();
  },
  methods: {
    async getClubData() {
      const request_path = '/result/club?id=' + this.$route.query['id']
      const club_explain_res = await this.getData(request_path);
      console.log(club_explain_res);
      this.club_name = club_explain_res['club_name'];
      this.club_explain = club_explain_res['club_explain'];
      this.activities = club_explain_res['activities'];
      this.is_loading = false;
    },

  },
}
</script>
<style scoped>
h1 {
  margin: 0;
  font-size: 40px;
}

h3 {
  margin: 0;
}

p {
  margin: 5% 10% 0 10%;
  text-align: left;
  line-height: 1.3rem;
  letter-spacing: 0.8px;
}

ul {
  width: 100%;
  margin-left: 5%;
  margin-top: 0;
  list-style-type: '#';
}

li {
  margin-top: 10px;
}
</style>
