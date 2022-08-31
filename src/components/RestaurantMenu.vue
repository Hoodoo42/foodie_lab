<template>
  <div>
    <button @click="show_menu">Menu</button>

    <div v-if="menu">
      <p>Image:</p>
      <input ref="image" type="text" name="image_url" />
      <p>Item Name:</p>
      <input ref="name" type="text" name="name" />
      <p>Price:</p>
      <input ref="price" type="text" name="price" />
      <p>Description:</p>
      <input ref="description" type="text" name="description" />
      <button @click="add_item">Add Menu Item</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      menu: false,
    };
  },

  methods: {
    show_menu() {
      this.menu = true;
    },

    add_item() {
      let access_id = cookies.get(`restaurant_id`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/menu`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_id,
          },
          method: `POST`,

          data: {
            description: this.$refs[`description`],
            image_url: this.$refs[`image`],
            name: this.$refs[`name`],
            price: this.$refs[`price`]
          },
        })
        .then((res) => {
          res;
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