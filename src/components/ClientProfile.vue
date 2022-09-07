<template>
  <div>
    <img :src="profile[`image_url`]" alt="" />
    <label for="name">Name:</label>
    <input ref="name" type="name" name="name" :value="profile[`first_name`]" />

    <label for="last_name">Last Name:</label>
    <input
      ref="last_name"
      type="name"
      name="last_name"
      :value="profile[`last_name`]"
    />
    <br />
    <label for="username">Username:</label>
    <input
      ref="username"
      type="name"
      name="username"
      :value="profile[`username`]"
    />
    <br />
    <label for="email">Email:</label>
    <input ref="email" type="email" name="email" :value="profile[`email`]" />
    <br />
    <label for="image">Profile Pic:</label>
    <input ref="image" type="url" name="image" :value="profile[`image_url`]" />

    <button @click="edit_button">Edit Profile</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      profile: undefined,
    };
  },

methods:{
  edit_button() {
    let access_token = cookies.get(`client_token`);
    axios
      .request({
        url: ` https://innotechfoodie.ml/api/client`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          token: access_token,
        },
        method: `PATCH`,
        data: {
          email: this.$refs[`email`][`value`],
          first_name: this.$refs[`name`][`value`],
          last_name: this.$refs[`last_name`][`value`],
          image_url: this.$refs[`image`][`value`],
          username: this.$refs[`username`][`value`],
        
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

  created() {
    let unique_client = cookies.get(`client_id`);
    axios
      .request({
        url: ` https://innotechfoodie.ml/api/client`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params: {
          client_id: unique_client,
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
img {
  width: 250px;
  height: 250px;
}
</style>