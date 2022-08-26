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
      <button>Login</button>
      <button>Sign Up</button>
    </div>
    <client-login v-if="login"></client-login>
    <client-sign-up v-if="sign_up"></client-sign-up>
  </div>
</template>

<script>
import ClientSignUp from "@/components/ClientSignUp.vue";
import ClientLogin from "@/components/ClientLogin.vue";

export default {
  components: {
    ClientSignUp,
    ClientLogin,
  },
  //   variable holding the condtionals that will define which options are displayed for the user.
  data() {
    return {
      foodie: true,
      login: undefined,
      sign_up: undefined,
    };
  },

  methods: {
    foodie_side() {
      this.foodie = true;
    },

    feeder_side() {
      this.foodie = false;
    },

    open_login() {
      this.login = true;
      this.sign_up = false;
    },

    open_sign_up() {
      this.sign_up = true;
      this.login = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>