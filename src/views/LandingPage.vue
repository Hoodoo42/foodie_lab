// landing page template has the registered the signup and login so anything in those components will show up here. 



<template>
    <div>
<sign-up></sign-up>
<login-view></login-view>
    </div>
</template>

<script>
import SignUp from "@/components/SignUp.vue"
import LoginView from "@/components/LoginView.vue"
    export default {
        components:{
            SignUp,
            LoginView
        }
    }
</script>

<style lang="scss" scoped>

</style>