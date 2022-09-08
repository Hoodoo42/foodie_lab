<template>
  <div>
    <div>
      <!-- once a restaurant creates a menu item info is saved in a cookie, gathered in this component and displayed through this html
      it is looping through the info in the existing_menu bound by the individual items id, and displays each item -->
      <div class="menu_card" v-for="info in existing_menu" :key="info[`id`]">
        <article v-if="menu">
          <h3>{{ info[`name`] }}</h3>
          <img :src="info[`image_url`]" alt="" />
          <h4>{{ info[`price`] }}</h4>
          <h3>{{ info[`description`] }}</h3>
          <button @click="edit_item(info)">Edit Item</button>
          <button @click="access_delete(info[`id`])">Delete Item</button>
        </article>
      </div>
      <restaurant-menu-delete></restaurant-menu-delete>
      <restaurant-menu-edit v-if="edit"></restaurant-menu-edit>
      <!-- this is a blank form to allow restaurants to add new items -->
      <div v-if="menu" ref="add_new">
        <p>Image:</p>
        <input ref="image" type="text" name="image_url" />
        <p>Item Name:</p>
        <input ref="name" type="text" name="name" />
        <p>Price:</p>
        <input ref="price" type="number" name="price" />
        <p>Description:</p>
        <input ref="description" type="text" name="description" />
        <button @click="add_item">Add Menu Item</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

import RestaurantMenuEdit from "@/components/RestaurantMenuEdit.vue";
import RestaurantMenuDelete from "@/components/RestaurantMenuDelete.vue";

export default {
  components: {
    RestaurantMenuEdit,
    RestaurantMenuDelete,
  },

  data() {
    return {
      existing_menu: undefined,
      menu: true,
      edit: undefined,
      deleting: undefined,
    };
  },
  // adding a new item will then display through the above html
  methods: {
    add_item() {
      let access_token = cookies.get(`restaurant_token`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/menu`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `POST`,

          data: {
            description: this.$refs[`description`][`value`],
            image_url: this.$refs[`image`][`value`],
            name: this.$refs[`name`][`value`],
            price: +this.$refs[`price`][`value`],
          },
        })
        .then((res) => {
          res;
          alert(`successfully added new menu item!`);
        })
        .catch((err) => {
          err;
        });
    },

    edit_item(item) {
      this.edit = true;
      this.menu = false;

      cookies.set(`chosen_item`, item);
    },

    access_delete(item_id) {
      this.deleting = true;
      // cookies.set(`chosen_item_id`, item_id);
      this.$root.$emit(`delete_menu_item`, item_id);
    },
  },
  // on mounted the restaurant id is brought in from cookie jar so that the proper items are being displayed, and not from any
  // other restaurant
  mounted() {
    let access_id = cookies.get(`restaurant_id`);

    axios
      .request({
        url: `https://innotechfoodie.ml/api/menu`,
        headers: {
          "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
        },
        params: {
          restaurant_id: access_id,
        },
      })
      // this is where the data is brought in from that is being looped through in the html
      .then((res) => {
        res;
        this.existing_menu = res[`data`];
      })
      .catch((err) => {
        err;
      });
  },
};
</script>

<style lang="scss" scoped>
.menu_card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
img {
  width: 250px;
  height: 250px;
}
.edit {
  display: grid;
  place-items: center;
}
</style>