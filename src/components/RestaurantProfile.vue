<template>
  <div>
    <button @click="access_profile">Profile</button>

    <div v-if="profile_accessed">
      <label for="name">Name:</label>
      <input ref="name" type="name" name="name" />

      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" /><br />

      <!-- string in the form of ###-###-#### -->
      <label for="phone_number">Phone Number:</label>
      <input ref="phone_number" type="number" name="phone_number" />
      <br />

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
      <input ref="password" type="password" name="password" />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      profile_accessed: undefined,
    };
  },

  methods: {
    access_profile() {
      this.profile_accessed = true;

      let access_id = cookies.get(`restaurant_id`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          params: {
            restaurant_id: access_id,
          },
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
        })
        .then((res) => {
          res;
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