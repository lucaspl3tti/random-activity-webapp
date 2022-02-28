import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

// Define Variables for the game
app.config.globalProperties.playerAmount = 0;
app.config.globalProperties.activities = [];
app.config.globalProperties.playerList = [];

app.mount("#app");
