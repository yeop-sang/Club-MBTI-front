<template>
  <div @click="handleClick" style="width: 100%; height: 100%">
  <ClassResultTemplate button_text="동아리 추천 받기" :is_loading="is_loading" :is_show_button="!(share_mode)"
  :next_path="next_question_path">
    <template v-slot:subTitle>
      <div class="shareButton" v-show="!(share_mode)">
        <img src="../assets/share_icon.svg" alt="share" @click="shareToPage"/>
      </div>
      <h3>{{ this.sub_name }}</h3>
    </template>
    <template v-slot:resultTitle>
      <div class="stamp">
        {{ this.class_name }}
      </div>
    </template>
    <template v-slot:explain>
      <p>{{ this.class_intro }}</p>
    </template>
    <template v-slot:box>
      <div class="bottomBoxWrapper" v-show="share_mode">
        <div class="boxWrapper">
          <h3>Comment</h3>
          <div class="commentBox"></div>
        </div>
        <div class="boxWrapper">
          <h3>Next Is</h3>
          <div class="commentBox"></div>
        </div>
      </div>
    </template>
  </ClassResultTemplate>
  </div>
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
    return {
      sub_name: "Error",
      class_name: "Error",
      class_intro: [],
      is_loading: true,
      share_mode: false,
      next_question_path: "/",
      is_clicked: false
    }
  },
  methods: {
    async getClass() {
      const res = await this.getData('/result/class?id=' + this.$route.query['id'])
      this.class_name = res['classname'];
      this.sub_name = res['ClassSubTitle'];
      this.class_intro = res['ClassExplain'];
      this.is_loading = false;
      this.next_question_path = '/' + res['Question_path'];
    },
    shareToPage() {
      this.share_mode = true
    },
    handleClick() {
      if(this.share_mode)
        if (this.is_clicked)
        {
          this.share_mode = false
          this.is_clicked = false
        }
        else
          this.is_clicked = true
    }
  },
}
</script>
<style scoped lang="scss">
h1 {
  margin: 0;
}

h3 {
  margin: 0;
}

p {
  margin: 2px 10%;
  text-align: left;
  letter-spacing: 0.8px;
}

.classImage {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15% 0;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.stamp {
  margin-bottom: 10%;
  color: #666666;

  border: 1rem double #C4C4C4;
  transform: rotate(-5deg);
  font-size: 50px;
  font-family: dimibang;
  -webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
  border-radius: 0;
  padding: 0.5rem;
  margin-top: 30px;
}

.shareButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10%;
}

.commentBox {
  margin: 10px 20px;
  height: 100%;
  min-height: 100px;
  background-color: rgba(230, 212, 195, 0.15);
  border-radius: 20px;
}

.bottomBoxWrapper {
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.boxWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

</style>
