import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// see the mathlive stylesheet in index.html

const app = createApp(App);
app.use(router);

app.mount("#app");
