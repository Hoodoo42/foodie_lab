import Vue from "vue";
import VueRouter from "vue-router";

// importing all of the views

import LandingPage from "@/views/LandingPage";
import RestaurantList from "@/views/RestaurantList";
import RestaurantHome from "@/views/RestaurantHome";
import TheMenu from "@/views/TheMenu";
import ClientHome from "@/views/ClientHome";
import AddToCart from "@/views/AddToCart";

Vue.use(VueRouter);
// creating their paths for code purpose and what users will see in browser path
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
  {
    path: "/Home",
    component: ClientHome,
  },
  {
    path: "/Cart",
    component: AddToCart,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
