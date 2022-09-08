// client home is their landing page that holds the buttons that will take them to the deisred destinations accesible from client side
<template>
  <div>
    <button @click="open_profile">Profile</button>
    <client-profile v-if="profile"></client-profile>

    <button @click="open_logout">Log Out</button>
    <client-logout v-if="logging_out"></client-logout>

    <button @click="to_restaurants">Browse Foodie Feeders</button>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientLogout from "@/components/ClientLogout.vue";
export default {
  components: {
    ClientProfile,
    ClientLogout,
  },
  data() {
    return {
      profile: undefined,
      logging_out: undefined,
    };
  },
  methods: {
    open_profile() {
      this.profile = true;
    },
    open_logout() {
      this.logging_out = true;
    },

    to_restaurants() {
      this.$router.push(`/list`);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>