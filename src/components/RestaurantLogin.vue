// same process from client login.
<template>
  <div>
    <article>
      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" /><br />
      <label for="password">Password:</label>
      <input ref="password" type="password" name="password" /> <br />
    </article>
    <button @click="restaurant_login_button">Restaurant Login</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    restaurant_login_button() {
      axios
        .request({
          url: ` https://innotechfoodie.ml/api/restaurant-login`,

          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
          method: `POST`,
          data: {
            email: this.$refs[`email`][`value`],
            password: this.$refs[`password`][`value`],
          },
        })
        // the restaurant destination takes them to their restaurant home page
        .then((res) => {
          res;

          cookies.set(`restaurant_token`, res[`data`][`token`]);
          cookies.set(`restaurant_id`, res[`data`][`restaurantId`]);

          this.$router.push(`/Restaurant`);
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