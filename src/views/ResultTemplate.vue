<template>
  <LoadingTemplate :is_loading="false">
    <div class="pageDiv">
      <div class="flex-column contentDiv">
        <div class="subTitle">
          <div class="shareButton">
            <img src="../assets/share_icon.svg" alt="share" @click="shareToPage"/>
          </div>
          <slot name="subTitle"/>
        </div>
        <div class="resultTitle">
          <slot name="resultTitle"/>
        </div>
        <div class="classImage">
          <slot name="classImage"/>
        </div>
        <div>
          <slot name="explain"/>
        </div>
      </div>
      <div class="bottomButton">
        <FullButton :text="button_text"/>
      </div>
    </div>
  </LoadingTemplate>
</template>

<script>
import FullButton from "@/components/FullButton";
import LoadingTemplate from "@/views/LoadingTemplate";

export default {
  name: "ClassResult",
  components: {LoadingTemplate, FullButton},
  data() {
    return {
      share: false
    }
  },
  methods: {
    shareToPage() {
      this.share = true
    }
  },
  props: {
    stamp_title: {
      type: String,
      default: "Error"
    },
    button_text: {
      type: String,
      default: "Error"
    },
  },
}
</script>
<style scoped>
.pageDiv {
  width: 100%;
  height: 100%;
  align-items: space-between;
}


.contentDiv {
  width: 100%;
  align-items: center;
  justify-content: flex-start;
}

.subTitle {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.resultTitle {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.classImage {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20%;
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

.bottomButton {
  margin-top: 20%;
}
</style>
