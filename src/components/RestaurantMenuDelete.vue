<template>
  <div v-if="delete_choices">
    <button @click="confirm_delete">Confirm Delete</button>
    <button @click="cancel_delete">Cancel</button>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      delete_choices: undefined,

      // edit_item: undefined
    };
  },
  methods: {
    delete_options() {
      this.delete_choices = true;
    },
    // restaurant id, and token are needed to send a delete request for a menu item
    confirm_delete() {
      let access_token = cookies.get(`restaurant_token`);
      let delete_id = cookies.get(`chosen_item_id`);
      axios
        .request({
          url: `https://innotechfoodie.ml/api/menu`,
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
            token: access_token,
          },
          method: `DELETE`,

          data: {
            menu_id: delete_id,
          },
        })
        .then((res) => {
          res;
        })
        .catch((err) => {
          err;
        });
    },
    cancel_delete() {
      this.delete_choices = false;
    },
  },
  // on created the specific items info that was chosen to be deleted will be recieved here
  created() {
    this.$root.$on(`delete_menu_item`, this.delete_options);
  },
};
</script>

<style lang="scss" scoped>
</style>