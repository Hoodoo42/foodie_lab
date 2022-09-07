<template>
  <div>
    <label for="name">Name:</label>
    <input ref="name" type="name" name="name" :value="profile[`first_name`]" />

    <label for="last_name">Last Name:</label>
    <input
      ref="last_name"
      type="name"
      name="last_name"
      :value="profile[`last_name`]"
    />

    <label for="username">Username:</label>
    <input
      ref="username"
      type="name"
      name="username"
      :value="profile[`username`]"
    />

    <label for="email">Email:</label>
    <input ref="email" type="email" name="email" :value="profile[`email`]" />

    <label for="image">Profile Pic:</label>
    <input ref="image" type="url" name="image" :value="profile[`image_url`]" />
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
        this.profile = res[`data`];
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>