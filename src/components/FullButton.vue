<template>
  <button class="mybutton" :style="propStyle" @click="excuteFn">
    {{ this.text }}
  </button>
</template>

<script>
export default {
  name: "FullButton",
  props: {
    text: {
      type: String,
      default: "ERROR"
    },
    bg_color: {
      type: String,
      default: "7FBD95"
    },
    isBottom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    propStyle() {
      let style = {};
      if (this.isBottom) {
        style = {
          position: 'absolute',
          bottom: '10%'
        };
      }
      style['background'] = "#" + this.bg_color;
      return style;
    },
  },
  methods: {
    async excuteFn() {
      await this.$emit('custom-fn');
    }
  },
}

</script>

<style scoped>
.mybutton {
  width: 85%;
  max-width: 318px;
  height: 52px;
  border-radius: 52px;
  background-color: v-bind(bg_color);
  border: 0;
  outline: 0;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: 0.07px;
  text-align: center;
  color: #fff;
}


</style>
