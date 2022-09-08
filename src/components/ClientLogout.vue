<template>
  <div></div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  created() {
    // client token is retrieved and used in the client-login delete request. This will only delete token not account.
    let access_token = cookies.get(`client_token`);

    axios
      .request({
        url: `https://innotechfoodie.ml/api/client-login`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          token: access_token,
        },
        method: `DELETE`,
      })
      // on success client will be brought back to login/signup page
      .then((res) => {
        res;
        this.$router.push(`/`);
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>