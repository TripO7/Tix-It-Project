<template>
  <div id="app">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import SignUp from '@/pages/SignUp.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import CreateTicket from '@/pages/CreateTicket.vue'
import Email from '@/pages/Email.vue'
import ForgotPassword from '@/pages/ForgotPassword.vue'
import Navbar  from '@/components/Navbar.vue'
import Landing from '@/pages/Landing.vue'

export default {
  name: 'App',
  components: {
    SignUp, Login, Home, CreateTicket, Navbar, Email, ForgotPassword, Landing
  }
}
</script>

<style>
body {
  background: #0086ad;
  color: white;
  font-family: 'Open Sans';
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body::-webkit-scrollbar {
display: none;
}

body {
-ms-overflow-style: none;
scrollbar-width: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Open Sans";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  color: white;
}
</style>
