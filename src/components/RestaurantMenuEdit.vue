<template>
  <div>
    <div class="edit">
      <!-- the form is bound to data that was already input by the user
      user can overwrite the info with new info -->
      <article>
        <label for="name">Name:</label>
        <input ref="name" type="name" name="name" :value="edit_item[`name`]" />

        <label for="image">Image:</label>
        <input
          ref="image"
          type="url"
          name="image"
          :value="edit_item[`image_url`]"
        />

        <label for="price">Price:</label>
        <input
          ref="price"
          type="number"
          name="price"
          :value="edit_item[`price`]"
        />

        <label for="descrition">Description:</label>
        <input
          ref="description"
          type="text"
          name="description"
          :value="edit_item[`description`]"
        />
      </article>
      <!-- clicking this will send an axios request with the new data to overwrite -->
      <button @click="submit_edit">Submit Edit</button>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      edit_item: undefined,
    };
  },
  methods: {
    submit_edit() {
      let access_token = cookies.get(`restaurant_token`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/menu`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `PATCH`,

          data: {
            description: this.$refs[`description`][`value`],
            image_url: this.$refs[`image`][`value`],
            name: this.$refs[`name`][`value`],
            price: this.$refs[`price`][`value`],
            menu_id: this.edit_item[`id`],
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
  // on create will have which item was clicked to be edited
  created() {
    let edit_item_info = cookies.get(`chosen_item`);
    this.edit_item = edit_item_info;
  },
};
</script>

<style lang="scss" scoped>
</style>