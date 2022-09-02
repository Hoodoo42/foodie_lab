import Vue from "vue";
import VueRouter from "vue-router";

import LandingPage from "@/views/LandingPage";
import RestaurantList from "@/views/RestaurantList";
import RestaurantHome from "@/views/RestaurantHome";
import TheMenu from "@/views/TheMenu";

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
    component: RestaurantHome,
  },
  {
    path: "/Menu",
    component: TheMenu,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
