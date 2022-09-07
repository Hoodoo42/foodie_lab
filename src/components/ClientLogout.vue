<template>
  <div></div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  created() {
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