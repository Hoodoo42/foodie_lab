<template>
  <div>
    <!-- this is the form that will display for client side logn -->
    <label for="email">Email:</label>
    <input ref="email" type="email" name="email" /><br />

    <label for="password">Password:</label>
    <input ref="password" type="password" name="password" /> <br />

    <button @click="login_button">Client Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    // using a post request to send the users input to the API which will return a unique id and token
    login_button() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/client-login`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
          method: "POST",

          data: {
            email: this.$refs[`email`][`value`],
            password: this.$refs[`password`][`value`],
          },
        })
        // in the success the token and id are saved in cookies to be used later
        // the client is sent to client home page
        .then((res) => {
          res;
          cookies.set(`client_token`, res[`data`][`token`]);
          cookies.set(`client_id`, res[`data`][`client_id`]);
          this.$router.push(`/Home`);
        })
        .catch((err) => {
          err;
          alert(`Login info was incorrect, please sign up or try again`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>