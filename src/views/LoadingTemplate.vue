<template>
  <div class="flex-column contentDiv">
    <PacmanLoader v-show="is_loading"/>
    <div class="contentDiv" v-show="!(is_loading)">
      <slot/>
    </div>
  </div>
</template>

<script>

import PacmanLoader from "@/components/PackmanLoader";
export default {
  name: "LoadingTemplate",
  components: {PacmanLoader},
  mounted() {

  },
  props: {
    is_loading: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style scoped>
.contentDiv {
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
}

.loader {
  position: fixed;
  width: 500px;
  height: 200px;
  top: 50%;
  left: 50%;
}
</style>
