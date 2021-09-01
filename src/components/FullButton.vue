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
          position: 'fixed',
          bottom: '10%'
        };
      }
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

<style scoped lang="scss">
.mybutton {
  width: 85%;
  max-width: 318px;
  height: 52px;
  border-radius: 52px;
  background-color: rgba(179, 169, 161, 0.3);
  border: 0;
  outline: 0;
  margin: 10% 0;

  font-family: 'NanumDdarEGeEomMaGa';
  font-size: 30px;
  letter-spacing: 0.12px;
  text-align: center;
  color: #582908;
}


</style>
