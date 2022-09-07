<template>
  <div ref="container">
    <div>
      <article>
        <label for="name">Name:</label>
        <input ref="name" type="name" name="name" :value="profile[`name`]" />

        <label for="email">Email:</label>
        <input
          ref="email"
          type="email"
          name="email"
          :value="profile[`email`]"
        /><br />

        <!-- string in the form of ###-###-#### -->
        <label for="phone_number">Phone Number:</label>
        <input
          ref="phone_number"
          type="tel"
          name="phone_number"
          :value="profile[`phone_number`]"
        />
        <br />

        <label for="bio">Bio:</label>
        <input ref="bio" type="text" name="bio" :value="profile[`bio`]" />
        <br />

        <label for="address">Address:</label>
        <input
          ref="address"
          type="text"
          name="address"
          :value="profile[`address`]"
        />
        <br />

        <!-- must be Calgary, Vancouver, or Toronto -->
        <label for="city">City:</label>
        <input ref="city" type="text" name="city" :value="profile[`city`]" />
        <br />

        <label for="profile">Profile Picture:</label>
        <input
          ref="profile_url"
          type="url"
          name="profile_pic"
          :value="profile[`profile_url`]"
        />

        <label for="banner">Banner:</label>
        <input
          ref="banner_url"
          type="url"
          name="banner"
          :value="profile[`banner_url`]"
        />

        <br />
      </article>
      <button @click="edit_button">Edit Profile</button>
      <button @click="logout_button">Logout</button>
      <button @click="delete_restaurant">Delete Account</button>

      <div v-if="delete_button">
        <p>Are you sure you want to delete your account?</p>
        <label for="password">Password:</label>
        <input ref="password" type="password" name="password" />
        <button @click="confirm_delete">Yes I am sure</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  data() {
    return {
      profile: [],
      delete_button: false,
    };
  },

  methods: {
    edit_button() {
      let access_token = cookies.get(`restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `PATCH`,

          data: {
            email: this.$refs[`email`][`value`],
            name: this.$refs[`name`][`value`],
            bio: this.$refs[`bio`][`value`],
            address: this.$refs[`address`][`value`],
            city: this.$refs[`city`][`value`],
            phone_number: this.$refs[`phone_number`][`value`],
            profile_url: this.$refs[`profile_url`][`value`],
            banner_url: this.$refs[`banner_url`][`value`],
          },
        })
        .then((res) => {
          res;
          alert(`Success`);
        })
        .catch((err) => {
          err;
        });
    },

    logout_button() {
      let access_token = cookies.get(`restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant-login`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `DELETE`,
        })
        .catch((res) => {
          res;
          alert(`Account Succesfully Logged Out!`);

          this.$router.push(`/`);
        })
        .catch((err) => {
          err;
        });
    },

    delete_restaurant() {
      this.delete_button = true;
    },
    confirm_delete() {
      let access_token = cookies.get(`restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `DELETE`,

          data: {
            password: this.$refs[`password`][`value`],
          },
        })
        .catch((res) => {
          res;
          alert(`Account Succesfully Deleted!`);

          this.$router.push(`/`);
        })
        .catch((err) => {
          err;
        });
    },
  },
  mounted() {
    let access_id = cookies.get(`restaurant_id`);

    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurant`,

        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params: {
          restaurant_id: access_id,
        },
      })
      .then((res) => {
        res;
        this.profile = res[`data`][0];
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>