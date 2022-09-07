<template>
  <div class="container">
    <h3>Welcome</h3>
    <button @click="access_profile">Profile</button>
    <button @click="show_menu">Menu</button>

    <restaurant-profile v-if="profile_accessed"></restaurant-profile>
    <restaurant-menu v-if="menu"></restaurant-menu>
  </div>
</template>

<script>
import cookies from "vue-cookies";

import RestaurantProfile from "@/components/RestaurantProfile.vue";
import RestaurantMenu from "@/components/RestaurantMenu.vue";
export default {
  components: {
    RestaurantProfile,
    RestaurantMenu,
  },
  restaurant_deets: cookies.get(`restaurant_id`),
  data() {
    return {
      profile_accessed: undefined,
      menu: undefined,

      restaurant_deets: undefined,
    };
  },

  methods: {
    access_profile() {
      this.profile_accessed = true;
      this.menu = false;
    },
    show_menu() {
      this.menu = true;
      this.profile_accessed = false;
    },
  },
};
</script>



<style lang="scss" scoped>
h3 {
  font-size: 3rem;
}
.container {
  display: grid;
  justify-items: center;
}
</style>