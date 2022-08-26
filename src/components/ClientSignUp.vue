// signup template is holding the inout sections for the user to fill out thier information, that will be used to save their info in a cookie
// allowing them to enter the site with their unique information
<template>
  <div>
    <article>
      <label for="name">Name:</label>
      <input ref="first_name" type="name" name="name" />

      <label for="lastname">Last Name:</label>
      <input ref="last_name" type="name" name="lastname" /><br />

      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" /><br />

      <label for="username">Username:</label>
      <input ref="username" type="username" name="username" /> <br />

      <label for="password">Password:</label>
      <input ref="password" type="password" name="password" /> <br />

      <label for="profile_pic">Profile Picture:</label>
      <input ref="profile_pic" type="url" name="profile_pic" />
    </article>
    <button @click="signup_button">Sign Up</button>
  </div>
</template>

// data is converting the user info input into what the axios request is looking for as an input, so the axios can the respond back 
// with a token id for the user.
<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    signup_button() {
      axios
        .request({
          url: ` https://innotechfoodie.ml/api/client`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
          method: `POST`,

          data: {
            first_name: this.$refs[`first_name`][`value`],
            last_name: this.$refs[`last_name`][`value`],
            email: this.$refs[`email`][`value`],
            username: this.$refs[`username`][`value`],
            password: this.$refs[`password`][`value`],
            image_url: this.$refs[`profile_pic`][`value`],
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