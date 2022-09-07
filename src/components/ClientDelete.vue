<template>
  <div>
    <p>Are you sure you wan't to delete you account?</p>
    <label for="password">Password:</label>
    <input ref="password" type="password" name="password" />
    <button @click="confirm_delete">Yes, I am sure</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

export default {
  methods: {
    confirm_delete() {
      let access_token = cookies.get(`client_token`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/client`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `DELETE`,

          data:{
            password: this.$refs[`password`][`value`]
          }
        })
        .then((res) => {
          res;
          alert(`Accounts successfully deleted`), this.$router.push(`/`);
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