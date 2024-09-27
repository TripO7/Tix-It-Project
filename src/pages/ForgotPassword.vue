<template>
  <div class="rectangle">
    <div class="register">

      <div>
        <img :src="logo" alt="TIX-IT Logo">
      </div>

      <div>
        <h1>RESET YOUR PASSWORD</h1>
      </div>

      <input type="password" placeholder="Enter new password ">
      <input type="password" placeholder="Confirm new password ">
    </div>

    <div>
      <button>Reset Password
      </button>
    </div>

  </div>
</template>

<script>
import logo from "../assets/TIX-IT logo light-export.png"
export default {
  name: 'ForgotPassword ',
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

.rectangle img{
  width:130px;
  height: 40px;
  margin-right : 240px;
  margin-top: 10px;
}

.rectangle h1 {
  font-size: 28px;
  font-weight: bold;
  padding-top: 40px;
  text-align: center;
}



.rectangle .register input[type="password"],
.rectangle .register input[type="password"] {
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



</style>
