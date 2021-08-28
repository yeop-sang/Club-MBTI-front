<template>
  <div class="flex-column main">
    <router-view v-slot="{ Component }" class="flex-column">
      <transition name="fade">
        <Component :is="Component" class="flex-column"/>
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #582908;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background: #fef0e0;
}

a {
  text-decoration: none;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

html, body {
  width: 100%;
  height: 100%;
  background: pink;
  margin: 0px;
}

</style>
<style scoped>
.main {
  width: 100%;
  max-width: 375px;
  height: 100%;
  align-items: center;
  background: #fef0e0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
