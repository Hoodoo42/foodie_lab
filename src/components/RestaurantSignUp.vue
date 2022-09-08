// this holds the signup for for restaurants
// restaurant sign up uses a post request to add a new account.
// it will save the returned data id/token in cookies and send user to restaurant home page
<template>
  <div>
    <article>
      <label for="name">Name:</label>
      <input ref="name" type="name" name="name" />

      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" /><br />

      <!-- string in the form of ###-###-#### -->
      <label for="phone_number">Phone Number:</label>
      <input ref="phone_number" type="tel" name="phone_number" /> <br />

      <label for="bio">Bio:</label>
      <input ref="bio" type="text" name="bio" /> <br />

      <label for="address">Address:</label>
      <input ref="address" type="text" name="address" /> <br />

      <!-- must be Calgary, Vancouver, or Toronto -->
      <label for="city">City:</label>
      <input ref="city" type="text" name="city" /> <br />

      <label for="profile_pic">Profile Picture:</label>
      <input ref="profile_pic" type="url" name="profile_pic" />

      <label for="banner">Banner:</label>
      <input ref="banner" type="url" name="banner" />

      <label for="password">Password:</label>
      <input ref="password" type="password" name="password" /> <br />
    </article>
    <button @click="restaurant_signup_button">Restaurant SignUp</button>
  </div>
</template>

<script>
// before using axios, must first import it into the component
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    restaurant_signup_button() {
      axios
        .request({
          url: ` https://innotechfoodie.ml/api/restaurant`,

          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },

          method: `POST`,
          // in vue, we grab the values from the signup form in the html with refs. This pulls in the information the user has entered.
          data: {
            email: this.$refs[`email`][`value`],
            name: this.$refs[`name`][`value`],
            bio: this.$refs[`bio`][`value`],
            address: this.$refs[`address`][`value`],
            city: this.$refs[`city`][`value`],
            phone_number: this.$refs[`phone_number`][`value`],
            profile_url: this.$refs[`profile_pic`][`value`],
            banner_url: this.$refs[`banner`][`value`],
            password: this.$refs[`password`][`value`],
          },
        })
        .then((res) => {
          res;
          cookies.set(`restuarant_token`, res[`data`][`token`]);
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