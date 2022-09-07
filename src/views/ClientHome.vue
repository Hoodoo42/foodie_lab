<template>
  <div>
    <button @click="open_profile">Profile</button>
    <client-profile v-if="profile"></client-profile>

    <button @click="open_logout">Log Out</button>
    <client-logout v-if="logging_out"></client-logout>

  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
import ClientLogout from "@/components/ClientLogout.vue"
export default {
  components: {
    ClientProfile,
    ClientLogout
  },
  data() {
    return {
      profile: undefined,
      logging_out: undefined
    };
  },
  methods: {
    open_profile() {
      this.profile = true;

    },
    open_logout(){
      this.logging_out = true;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>