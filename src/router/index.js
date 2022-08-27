import Vue from "vue";
import VueRouter from "vue-router";

import LandingPage from "@/views/LandingPage";
import RestaurantList from "@/views/RestaurantList";
import RestaurantHome from "@/views/RestaurantHome"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/list",
    component: RestaurantList,
  },
  {
    path: "/Restaurant",
    component: RestaurantHome
  }
];

const router = new VueRouter({
  routes,
});

export default router;
