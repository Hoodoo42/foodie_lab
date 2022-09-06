<template>
  <div>
    <div>
      <div class="menu_card" v-for="info in existing_menu" :key="info[`id`]">
        <article v-if="menu">
          <h3>{{ info[`name`] }}</h3>
          <img :src="info[`image_url`]" alt="" />
          <h4>{{ info[`price`] }}</h4>
          <h3>{{ info[`description`] }}</h3>
          <button @click="edit_item(info)">Edit Item</button>
        </article>
   
      </div>


      <div class="edit" v-if="edit">
        <article>
          <label for="name">Name:</label>
          <input
            ref="name"
            type="name"
            name="name"
            :value="edit_cookie[`name`]"
          />

          <label for="image">Image:</label>
          <input
            ref="image_url"
            type="url"
            name="image"
            :value="edit_cookie[`image_url`]"
          />

          <label for="price">Price:</label>
          <input
            ref="price"
            type="number"
            name="price"
            :value="edit_cookie[`price`]"
          />

          <label for="descrition">Description:</label>
          <input
            ref="description"
            type="text"
            name="description"
            :value="edit_cookie[`description`]"
          />
        </article>
        <button @click="submit_edit">Submit Edit</button>
      </div>

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
export default {
  data() {
    return {
      existing_menu: undefined,
      menu: true,
      edit: undefined,

      edit_cookie: undefined,
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

    edit_item(item) {
      this.edit = true;
      this.menu = false;

      cookies.set(`chosen_item`, item),
        (this.edit_cookie = cookies.get(`chosen_item`));
    },

    submit_edit() {
      axios
        .request({
          url: `https://innotechfoodie.ml/api/menu`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: this.access_token,
          },
          method: `PATCH`,

          data: {
            // description: string,
            // image_url: string,
            name: this.$refs[`name`][`value`],
            // price: number,
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
.edit {
  display: grid;
  place-items: center;
}
</style>