<template>
  <div class="rectangle">
    <div class="register">
      <div>
        <img :src="logo" alt="TIX-IT Logo">
      </div>

      <div>
        <img class="lock" src="@/assets/lock-2430207_640.png" alt="Lock Image">
      </div>

      <div>
        <h4>FORGOT PASSWORD ?</h4>
      </div>

      <p class="email">Enter Email below to reset password</p>

      <input type="email" placeholder="username@email.com">
    </div>

    <div>
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/TIX-IT logo light-export.png";
export default {
  name: 'Email',
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style>
.rectangle {
  width: 400px;
  height: 500px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  background-color: #00C2C7;
  /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
}

.rectangle img {
  width: 130px;
  height: 40px;
  margin-top: 10px;
}

.rectangle .lock {
  width: 130px; /* Adjust lock width */
  height: 130px; /* Adjust lock height */
  margin-top:40px;
  margin-left: 140px;
}

.rectangle h4 {
  /*font-size: 28px;*/
  font-weight: bold;
  padding-top: 25px; /* Adjusted padding for halfway down */
  text-align: center;
}

.rectangle p {
  font-size: 12px;
  font-weight: lighter;
  text-align: center;
}

.email {
  margin-top: 20px;
}

.rectangle .register input[type="email"] {
  width: 300px;
  height: 50px;
  display: block;
  margin-bottom: 5px;
  margin-top: 45px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
}

.rectangle button {
  margin-bottom: 40px;
  width: 300px;
  height: 50px;
  margin-top: 15px;
  background-color: #005582;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

/* Add hover styles */
.rectangle button:hover,
.rectangle input:hover {
  background-color: #003d52; /* Darker color on hover */
}
</style>
