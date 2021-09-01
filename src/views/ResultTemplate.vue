<template>
  <LoadingTemplate :is_loading="is_loading">
    <div class="flex-column pageDiv">
      <div class="flex-column contentDiv">
        <div class="resultWrapper">
          <div class="subTitle">
            <slot name="subTitle"/>
          </div>
          <div class="resultTitle">
            <slot name="resultTitle"/>
          </div>
        </div>
        <div class="explainWrapper">
          <slot name="explain"/>
        </div>
        <slot name="box"/>
        <div></div>
      </div>
      <div>
        <FullButton :text="button_text" @custom-fn="goTo" v-show="is_show_button"/>
      </div>
    </div>
  </LoadingTemplate>
</template>

<script>
import LoadingTemplate from "@/views/LoadingTemplate";
import FullButton from "@/components/FullButton";
import router from "@/router";

export default {
  name: "ClassResult",
  components: {FullButton, LoadingTemplate},
  data() {
    return {
      share: false
    }
  },
  methods: {
    shareToPage() {
      this.share = true
    },
    goTo() {
      router.push(this.next_path);
    }
  },
  props: {
    button_text: {
      type: String,
      default: "Loading",
    },
    next_path: {
      type: String,
      default: '/'
    },
    is_loading: {
      type: Boolean,
      default: true,
    },
    is_show_button: {
      type: Boolean,
      default: true,
    }
  },
}
</script>
<style scoped>
.pageDiv {
  width: 100%;
  height: 100%;
  justify-content: space-between;
}

.contentDiv {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}

.subTitle {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.resultTitle {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.resultWrapper {
  width: 100%;
}

.explainWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}


</style>
