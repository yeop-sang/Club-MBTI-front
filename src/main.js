import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from "@/mixins";

const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount('#app');
// app.config.globalProperties.theme_color = {
//     brown: "582908",
//     apricot: "FDB872",
//     white: "FEF0E0",
//     green: "7FBD95",
// }
