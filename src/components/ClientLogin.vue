<template>
  <div>
    <label for="email">Email:</label>
    <input ref="email" type="email" name="email" /><br />

    <label for="password">Password:</label>
    <input ref="password" type="password" name="password" /> <br />

    <button @click="login_button">Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
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

        .then((res) => {
          res;
          cookies.set(`user_token`, res[`data`][`token`]);
          this.$router.push(`/list`);
        })
        .catch((err) => {
          err;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>