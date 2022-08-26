// landing page template has the registered the signup and login so anything in those components will show up here. 



<template>
  <div>
    <!-- buttons that will toggle between the client side and restaurant side of login or signup -->
    <button @click="foodie_side">Foodie</button>
    <button @click="feeder_side">Foodie Feeder</button>
    <br />
    <!-- if foodie button is clicked client side login and signup buttons appear -->
    <div v-if="foodie">
      <button ref="foodie_side_login" @click="open_login_view">
        Client Login
      </button>
      <button ref="foodie_side_signup" @click="open_sign_up">
        Client Sign Up
      </button>
    </div>
    <!-- else the restaurant login and sign up buttons will show -->
    <div v-else>
      <button ref="feeder_side_login">Login</button>
      <button ref="feeder_side_signup">Sign Up</button>
    </div>
    <login-view></login-view>
    <sign-up></sign-up>
  </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue";
import LoginView from "@/components/LoginView.vue";

export default {
  components: {
    SignUp,
    LoginView,
  },
  //   variable holding the condtional that will define which login and signup buttons appear on the page.
  data() {
    return {
      foodie: true,
    };
  },

  methods: {
    foodie_side() {
      this.foodie = true;
    },

    feeder_side() {
      this.foodie = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>