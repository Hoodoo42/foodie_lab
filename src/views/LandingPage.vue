// landing page template has the registered the signup and login so anything in those components will show up here. 



<template>
  <div>
    <!-- buttons that will toggle between the client side and restaurant side of login or signup -->
    <button @click="foodie_side">Foodie</button>
    <button @click="feeder_side">Foodie Feeder</button>
    <br />
    <!-- if foodie button is clicked client side login and signup buttons appear -->
    <div v-if="foodie">
      <button @click="open_login">Client Login</button>
      <button @click="open_sign_up">Client Sign Up</button>
    </div>
    <!-- else the restaurant login and sign up buttons will show -->
    <div v-else>
      <button @click="open_restaurant_login">Login</button>
      <button @click="open_restaurant_signup">Sign Up</button>
    </div>
    <!-- If client side is showing - the client login and signup buttons will show / Depending on login or signup clicked, the corresponding 
forms will display-->
    <div>
      <client-login v-if="login"></client-login>
      <client-sign-up v-if="sign_up"></client-sign-up>
      <!-- If Restaurant side is showing - the Restaurant login and signup buttons will show / Depending on login or signup clicked, the corresponding 
forms will display-->
      <restaurant-sign-up v-if="restaurant_signup"></restaurant-sign-up>
      <restaurant-login v-if="restaurant_login"></restaurant-login>
    </div>
  </div>
</template>

<script>
import ClientSignUp from "@/components/ClientSignUp.vue";
import ClientLogin from "@/components/ClientLogin.vue";

import RestaurantSignUp from "@/components/RestaurantSignUp.vue";
import RestaurantLogin from "@/components/RestaurantLogin.vue";

export default {
  components: {
    ClientSignUp,
    ClientLogin,
    RestaurantSignUp,
    RestaurantLogin,
  },
  //   variable holding the condtionals that will define which options are displayed for the user.
  data() {
    return {
      foodie: true,
      login: undefined,
      sign_up: undefined,

      restaurant_signup: undefined,
      restaurant_login: undefined,
    };
  },

  methods: {
    // when client side is clicked, everything restaurant is false
    foodie_side() {
      this.foodie = true;

      this.restaurant_signup = false;
      this.restaurant_login = false;
    },
    // when restaurant side is clicked - everything client is false
    feeder_side() {
      this.foodie = false;

      this.sign_up = false;
      this.login = false;
    },
    // client login form will show, client signup will not
    open_login() {
      this.login = true;
      this.sign_up = false;
    },
    // client signup will show, client login will not
    open_sign_up() {
      this.sign_up = true;
      this.login = false;
    },

    open_restaurant_login() {
      this.restaurant_login = true;
      this.restaurant_signup = false;
    },

    open_restaurant_signup() {
      this.restaurant_signup = true;
      this.restaurant_login = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>