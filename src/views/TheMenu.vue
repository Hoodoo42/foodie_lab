// this is the "individual restaurants menu/info page" this is where clients are sent after clicking the restaurant name in the list
// working on adding to cart functionality
<template>
  <div>
    <button @click="go_to_cart">Go To Cart</button>
    <!-- this displays selected restaurants info -->
    <div class="info">
      <h1>{{ restaurant_info[`name`] }}</h1>
      <h3>{{ restaurant_info[`address`] }}</h3>
      <h3>{{ restaurant_info[`city`] }}</h3>
      <h3>{{ restaurant_info[`bio`] }}</h3>
    </div>
    <!-- this shows the menu items/info of selected restaurant -->
    <div class="menu">
      <article class="item" v-for="info in restaurant_menu" :key="info[`id`]">
        <h4>{{ info[`name`] }}</h4>
        <img :src="info[`image_url`]" alt="" />
        <h4>{{ info[`description`] }}</h4>
        <h4>{{ info[`price`] }}</h4>
        <!-- this button will send the selected items info to the cart to be displayed "there" when client clicks go to cart button to see displayed info -->
        <button @click="add_to_cart(info)">add to cart</button>
      </article>
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

  methods: {
    // this is emiting selected items info for AddToCart to listen for
    add_to_cart(info) {
      this.$root.$emit(`added_item`, info);
    },
    go_to_cart() {
      this.$router.push("/Cart");
    },
  },
  // on created will hold the selected restaurants info
  created() {
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
.info {
  display: grid;
  place-items: center;
  text-align: center;
}
img {
  width: 250px;
  height: 250px;
}

.menu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  place-items: center;
  text-align: center;

  > .item {
    display: grid;
    text-align: center;
    border: 1px solid black;
  }
}
</style>