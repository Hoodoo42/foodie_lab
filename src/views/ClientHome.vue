<template>
  <div>
    <button @click="open_profile">Profile</button>

    <client-profile v-if="profile"></client-profile>
  </div>
</template>

<script>
import ClientProfile from "@/components/ClientProfile.vue";
export default {
  components: {
    ClientProfile,
  },
  data() {
    return {
      profile: undefined,
    };
  },
  methods: {
    open_profile() {
      this.profile = true;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>