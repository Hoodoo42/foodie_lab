<template>
  <div>
    <button @click="access_profile">Profile</button>

    <div v-if="profile_accessed">
      <label for="name">Name:</label>
      <input ref="name" type="name" name="name" v-model="profile_name" />

      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" v-model="profile_email" /><br />

      <!-- string in the form of ###-###-#### -->
      <label for="phone_number">Phone Number:</label>
      <input ref="phone_number" type="tel" name="phone_number" v-model="profile_number" />
      <br />

      <label for="bio">Bio:</label>
      <input ref="bio" type="text" name="bio" v-model="profile_bio" /> <br />

      <label for="address">Address:</label>
      <input ref="address" type="text" name="address" v-model="profile_address" /> <br />

      <!-- must be Calgary, Vancouver, or Toronto -->
      <label for="city">City:</label>
      <input ref="city" type="text" name="city" v-model="profile_city" /> <br />

      <label for="profile_pic">Profile Picture:</label>
      <input ref="profile_pic" type="url" name="profile_pic" />

      <label for="banner">Banner:</label>
      <input ref="banner" type="url" name="banner" />

      <label for="password">Password:</label>
      <input ref="password" type="password" name="password" v-model="profile_password" />
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";
export default {
  data() {
    return {
      profile_accessed: undefined,

    // profile:[]
      profile_name: '',
      profile_email: '',
      profile_address: '',
      profile_number: '',
      profile_bio: '',
      profile_city: '',
      profile_password: '',
    };
  },

  methods: {
    access_profile() {
      this.profile_accessed = true;

      let access_id = cookies.get(`restaurant_id`);

      axios
        .request({
          url: `https://innotechfoodie.ml/api/restaurant`,
          params: {
            restaurant_id: access_id,
          },
          headers: {
            "x-api-key": "ZKmQmvzJKfctNlIVXzeU",
          },
        })
        .then((res) => {
          res;
// I should probably put this into some sort of loop perhaps

        //   for(let i=0; i<res[`data`][0].length; i++){
        //     this.profile = res[`data`][0];
        //   }


          this.profile_name = res[`data`][0][`name`]
          this.profile_email = res[`data`][0][`email`]
          this.profile_address = res[`data`][0][`address`]
          this.profile_number = res[`data`][0][`phone_number`]
          this.profile_bio = res[`data`][0][`bio`]
          this.profile_city = res[`data`][0][`city`]

          
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