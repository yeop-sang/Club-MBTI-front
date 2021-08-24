<template>
    <div class="loader" v-show="isLoading">
      <pacman-loader color="#7FBD95"/>
    </div>
</template>

<script>
import PacmanLoader from "@/components/PackmanLoader";

export default {
  name: "LoadingAnimation",
  components: {PacmanLoader},
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
  },
}
</script>

<style scoped>

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
