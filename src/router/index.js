import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start-game",
      component: () => import("../views/StartGame.vue"),
    },
    {
      path: "/start",
      name: "add-players",
      component: () => import("../views/AddPlayers.vue"),
    },
    {
      path: "/add-activities",
      name: "add-activities",
      component: () => import("../views/AddActivities.vue"),
    },
    {
      path: "/get-activity",
      name: "activity",
      component: () => import("../views/GetActivity.vue"),
    },
  ],
});

export default router;
