<template>
  <div>
    <article>
      <label for="name">Name:</label>
      <input ref="first_name" type="name" name="name" />

      <label for="email">Email:</label>
      <input ref="email" type="email" name="email" /><br />

      <label for="phone_number">Phone Number:</label>
      <input ref="phone_number" type="number" name="phone_number" /> <br />

      <label for="bio">Bio:</label>
      <input ref="bio" type="text" name="bio" /> <br />

      <label for="city">City:</label>
      <input ref="city" type="text" name="city" /> <br />

      <label for="profile_pic">Profile Picture:</label>
      <input ref="profile_pic" type="url" name="profile_pic" />

      <label for="banner">Banner:</label>
      <input ref="banner" type="url" name="banner" />

      <label for="password">Password:</label>
      <input ref="password" type="password" name="password" /> <br />
    </article>
    <button @click="signed_up_restaurant">SignUp</button>
  </div>
</template>

<script>
export default {
  //         {
  //     email: (string),
  //     name: (string),
  //     address: (string),
  //     phone_number: (string in the form of ###-###-####),
  //     bio: (string),
  //     city: (string, one of Calgary, Vancouver or Toronto)
  //     profile_url: (string),
  //     banner_url: (string),
  //     password: (string)
  // }
};
</script>

<style lang="scss" scoped>
</style>