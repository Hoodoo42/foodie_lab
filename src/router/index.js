import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from "@/views/LandingPage"
import RestaurantList from "@/views/RestaurantList"
Vue.use(VueRouter)

const routes = [
 {
  path: "/",
  component: LandingPage

},
{
  path: "/list",
  component: RestaurantList

},

]

const router = new VueRouter({
  routes
})

export default router
