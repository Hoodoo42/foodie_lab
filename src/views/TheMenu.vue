<template>
  <div>
    <h3>The Menu</h3>
  </div>
</template>

<script>
import axios from "axios";
// import cookies from "vue-cookies";
export default {
  // making a get request. so I can display all the restaurant information of just the chosen restaurant.
  mounted() {
    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurants`,
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
};
</script>

<style lang="scss" scoped>
</style>