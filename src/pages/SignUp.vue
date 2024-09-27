<template>
  <div class="rectangle">
    <div class="register">
      <div>
        <img :src="logo" alt="TIX-IT Logo">
      </div>

      <h1> SIGN UP </h1>

      <div>
        <input type="text" placeholder="First Name" class="first-name-input">
        <input type="text" placeholder="Last Name" class="last-name-input">
      </div>

      <input type="email" v-model="email" placeholder="username@email.com">

      <input class="password" type="password" v-model="password" placeholder="Enter 6 or more digits" style="margin-top: 10px;">

      <div>
        <button @click="register" :disbaled="isSigningIn" class="sign-up-button">Sign Up</button>
      </div>

      <div class="login-link" style="margin-top: -28px;"> <!-- Adjusted margin-top for the login link -->
        <p>Already have an account? <router-link to="/login" class="sign-in-link">Sign In</router-link></p>
      </div>

    </div>
  </div>
</template>

<script>
import logo from "../assets/TIX-IT logo light-export.png"
import FirebaseApp from '../api/firebaseconfig.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { response } from "express";
export default {
  name: 'SignUp',
  data() {
    return {
      logo: logo,
      email:"",
      password:""
    }
  },
  methods: {
    async register() {
      this.isSigningIn = true;
      try {
        const auth = getAuth(FirebaseApp);
        createUserWithEmailAndPassword(auth, this.email, this.password)
        //signed up
        const user = userCredential.user;

        //call HTTP function to create users document, so their account is stored in db
        const response = await fetch('http://localhost:port/tixit/region/createUserDoc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            uid: user.uid,
            email: user.email,
            role: 'user'
          })
        });

        if(!response.ok){
          throw new Error('failed to create a user document');
        }

        const data = await response.text();
        //Navigate to login page after successful registration
        this.$router.push({ name: 'Login' });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        alert(`Error: ${errorMessage}`);
      } finally {
        this.isSigningIn = false;
      }
    }
  }
}


</script>

<style>
.rectangle {
  width: 400px;
  height: 500px;
  border-radius: 20px;
  margin: 40px auto;
  background-color: #00C2C7;
}

.rectangle img {
  width: 130px;
  height: 40px;
  margin-right: 240px;
  margin-top: 10px;
}

.rectangle.register input {
  width: 300px;
  height: 50px;
  padding-left: 20px;
  border: 1px solid white;
}

.rectangle .register .first-name-input {
  width: 150px;
  margin-left: 45px;
  margin-top: 50px;
}

.rectangle .register .last-name-input {
  width: 150px;
  margin-top: -50px;
  margin-right: 45px;
}

.rectangle .register .password {
  margin-top: 10px; /* Adjusted margin to move the password input up */
}

.rectangle .register .sign-up-button {
  width: 300px;
  height: 50px;
  background: #005582;
  color: white;
  cursor: pointer;
  margin-top: 20px; /* Adjusted margin to move the button up */
}

.rectangle p {
  font-size: 10px;
  font-weight: lighter;
}

.login-link {
  text-align: center;
  margin-top: 10px; /* Adjusted margin-top for the login link */
  color: #fff;
}

.sign-in-link {
  color: white;
  font-weight: bold;
  font-size: 11px;
}

button {
  margin-left: 50px;
  margin-top: 20px;
}
</style>