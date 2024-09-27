<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #00C2C7;">
    <router-link class="navbar-brand" to="/">
      <img :src="logo" alt="Tixit Logo" style="height: 90px; width: auto;">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">HOME<span class="sr-only"></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/createticket">CREATE TICKET</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">LOGIN<span class="sr-only"></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">SIGNUP</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "../assets/TIX-IT logo light-export.png"
export default {
  name: 'Navbar',
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  display: flex;
  top: 0;
  width: 100%;
  background: #00c2c7;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  z-index: 999;
}
.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-brand {
  color: white;
  font-weight: normal;
}

.nav-item {
  margin-left: 20px;
}

.navbar-brand {
  margin-left: 10px;
}

.navbar-light .navbar-nav .nav-link:hover {
  color: #005582;
}
</style>
