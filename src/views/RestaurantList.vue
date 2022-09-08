// this component is the list of availbale restaurants. Click thier name and be taken to the individual restaurants menu and info page
<template>
  <div>
    <h3>Welcome</h3>
    <!-- making a loop to access the array that holds all the restaurants and their information -->
    <!-- using that information to display just the chosen restaurants name. This is done by binding the individuals id within the loop.
   So when the restaurant name is clicked its info is  identified and is able to be used-->
    <h3
      v-for="restaurant in restaurants"
      :key="restaurant[`restaurant_id`]"
      @click="send_to_menu(restaurant[`restaurant_id`])"
    >
      {{ restaurant[`name`] }}
    </h3>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      // will be defined once "page" has loaded as per the mounted axios.request
      restaurants: undefined,
    };
  },
  // in this function, it is created by the @click, and the @click can send information. ^^ "@click="function_name[info[`to_send`]]"
  // and then that info in this case being the restaurant_id has been past to the cookie value.
  methods: {
    send_to_menu(info) {
      cookies.set(`chosen_id`, info);

      this.$router.push(`/Menu`);
    },
  },
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
        this.restaurants = res[`data`];
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>