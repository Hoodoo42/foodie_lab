<template>
  <div>
    <!-- When delete account is selected the user is displayed a question to make sure they do want to 
    delete account and prompted for their password which is a required data for the delete request -->
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
    // accessing the specific users token to confirm they are authorized to delete, and which token is to be deleted
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

          data: {
            password: this.$refs[`password`][`value`],
          },
        })
        // if request is successful the user is notified the account was deleted and is brought back to the login/signup page.
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