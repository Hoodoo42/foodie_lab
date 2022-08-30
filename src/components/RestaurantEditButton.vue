<template>
  <div>
    <button @click="edit_button">Edit Profile</button>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  methods: {
    edit_button() {
      let access_token = cookies.get(`restaurant_token`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
          method: `PATCH`,
// send this token -----
          token: access_token,
        })
        .then((res) => {
          res;
          document.body.insertHTML(
            `beforeend`,
            `
          <h5>profile succesffuly edited</h5>`
          );
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