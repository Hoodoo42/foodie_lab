// This component is the start of where the items added to cart will display for the client. 

<template>
  <div></div>
</template>

<script>
import cookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      cart: undefined,
    };
  },

  methods: {
    // using a get request for the client order I will be able to display the items associated with the client token
    add_to_cart() {
      let access_token = cookies.get(`client_token`);
      axios
        .request({
          url: ` https://innotechfoodie.ml/api/client-order`,
          headers: {
            token: access_token,
          },
        })
        // I am starting to work through getting the data passed from the request to display it on the "page"
        .then((res) => {
          res;
          this.cart = res[`data`];
        })
        .catch((err) => {
          err;
        });
    },
  },
  // I have created set to already hold the item(s) that have been "clicked" with the add to cart button.
  created() {
    this.$root.$on(`added_item`, this.add_to_cart);
  },
};
</script>

<style lang="scss" scoped>
</style>