import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Define Variables for the game
import * as players from '@/stores/players';
app.config.globalProperties.activities = players.player1.concat(players.player2, players.player3);
app.config.globalProperties.playerAmount = players.playerAmount;
app.config.globalProperties.playerList = [];

app.mount('#app')
