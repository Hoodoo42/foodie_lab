<template>
  <div>
    <div>
      <div class="menu_card" v-for="info in existing_menu" :key="info[`id`]">
        <h3>{{ info[`name`] }}</h3>
        <img :src="info[`image_url`]" alt="" />
        <h4>{{ info[`price`] }}</h4>
        <h3>{{ info[`description`] }}</h3>
      </div>
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
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      existing_menu: undefined,
    };
  },

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
        });
    },
  },

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
</style>