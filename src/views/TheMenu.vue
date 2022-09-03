<template>
  <div>
    <div ref="info">
    <h1>{{ restaurant_info[`name`] }}</h1>

    <h3>{{ restaurant_info[`address`] }}</h3>
    <h3>{{ restaurant_info[`city`] }}</h3>
    <h3>{{ restaurant_info[`bio`] }}</h3>
    </div>


    <div ref="menu" v-for="info in restaurant_menu" :key="info[`id`]">
        <h4>{{ info[`name`] }}</h4>
         <h4>{{ info[`description`] }}</h4>
          <h4>{{ info[`price`] }}</h4>
    </div>
  </div>
 
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      restaurant_info: undefined,
      restaurant_menu: undefined,
    };
  },

  mounted() {
    let chosen_id = cookies.get(`chosen_id`);
    // an axios request to grab the chosen restaurants information, using the restaurant id stored when the client clicked the restaurants name in RestaurantList.vue
    axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurant`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params: {
          restaurant_id: chosen_id,
        },
      })
      .then((res) => {
        res;
        this.restaurant_info = res[`data`][0];
      })
      .catch((err) => {
        err;
      });
    // an axios request to grab the chosen restaurants menu items to display, using the restaurant id stored when the client clicked the restaurants name in RestaurantList.vue
    axios
      .request({
        url: `https://innotechfoodie.ml/api/menu`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params: {
          restaurant_id: chosen_id,
        },
      })
      .then((res) => {
        res;
        this.restaurant_menu = res[`data`];
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>