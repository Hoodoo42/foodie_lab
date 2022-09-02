<template>
  <div>
    <button @click="show_menu">Menu</button>

    <div v-if="menu">
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
      menu: false,
 
    };
  },

  methods: {
    show_menu() {
      this.menu = true;
    },

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
            price: +this.$refs[`price`][`value`]
          },
        })
        .then((res) => {
          res;
        alert(`successfully added new menu item!`)
        
            let access_id = cookies.get(`restaurant_id`);
          axios
            .request({
              url: `https://innotechfoodie.ml/api/menu`,
              headers: {
                "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
              },
             params:{
              restaurant_id: access_id
             }
            })
            .then((res) => {
              res;
              
              
            })
            .catch((err) => {
              err;
            });
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