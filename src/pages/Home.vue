<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>
          <h1 class="ticket-heading">Create Ticket</h1>
        </div>
        <router-link to="/createticket" class="ticket-link">
            <img :src="logo" alt="TIX-IT Logo" class="img-fluid rounded-start">
        </router-link>
      </div>
      <div class="col-6">
        <div>
          <h1 class="horizontalRect-heading">Current Tickets</h1>
        </div>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="horizontalRect"></div>
            </div>
            <div class="carousel-item">
              <div class="horizontalRect"></div>
            </div>
            <div class="carousel-item">
              <div class="horizontalRect"></div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/ticket1.png"

export default {
  name: 'Home',
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.horizontalRect {
  width: 465px;
  height: 370px;
  background: #00C2C7;
  border-radius: 20px;
  margin-top: 110px;
  margin-left: 110px;
}

.ticket-heading {
  color: #fff; /* Text color */
  text-align: center; /* Center align the heading */
}

.horizontalRect-heading {
  color: #fff; /* Text color */
  text-align: center; /* Center align the heading */
}

h1 {
  margin-top: 30px;
}

.ticket-link {
  height: 300px;
}
</style>
