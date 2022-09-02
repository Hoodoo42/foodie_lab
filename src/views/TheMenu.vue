<template>
  <div>
    <h3>The Menu</h3>
<h5>{{ restaurant_info[`name`] }}</h5>

  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {

data() {
    return {
        restaurant_info: undefined,
        restaurant_menu: undefined
    }
},

  mounted() {
   let chosen_id =  cookies.get(`chosen_id`);
// an axios request to grab the chosen restaurants information, using the restaurant id stored when the client clicked the restaurants name in RestaurantList.vue
   axios
      .request({
        url: `https://innotechfoodie.ml/api/restaurant`,
        headers:{
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params:{
            restaurant_id: chosen_id
        }
      })
      .then((res) => {
        res;
        this.restaurant_info = res[`data`]
    
      })
      .catch((err) => {
        err;
      });
// an axios request to grab the chosen restaurants menu items to display, using the restaurant id stored when the client clicked the restaurants name in RestaurantList.vue
    axios
      .request({
        url: `https://innotechfoodie.ml/api/menu`,
        headers:{
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params:{
            restaurant_id: chosen_id
        }
      })
      .then((res) => {
        res;
        this.restaurant_menu = res[`data`]
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
</style>