<template>
  <div class="rectangle">
    <div class="register">
      <div>
        <img :src="logo" alt="TIX-IT Logo">
      </div>

      <div>
        <h1>LOGIN</h1>
      </div>

      <div class="signup">
        <p> Don't have an account? <router-link to="/signup" class="sign-up-link">Sign Up</router-link></p>
      </div>
      <input v-model="email" type="email" placeholder="username@email.com" style="margin-top: 20px;">
      <router-link to="/email" class="forgot-password" style="margin-bottom: 10px;">Forgot Password?</router-link>
      <input v-model="password" type="password" placeholder="Enter password" style="margin-top: 5px; margin-bottom: 5px;">
    </div>

    <div class="login-button-container">
      <button @click = "customSignInWithEmailAndPassword" class="login-button" :disabled="isSigningIn" style="width: 300px;">Login</button> <!-- Adjusted width -->
    </div>

    <div class="or-login-with" style="text-align: center; margin-top: -60px;"> <!-- Adjusted margin-top -->
      <div>
        <hr class="line-left" style="width: 20%; height: 2px; border: none; background-color: #ffffff; display: inline-block;">
        <p class="or-text" style="color: white; font-size: 14px; display: inline-block; margin: 0 10px;">or login with</p>
        <hr class="line-right" style="width: 20%; height: 2px; border: none; background-color: #ffffff; display: inline-block;">
      </div>
    </div>

    <div>
      <button @click = "signInWithGoogle" :disabled="isSigningIn" style="margin-top: 5px; width:300px;">Google</button>
    </div>
  </div>
</template>

<script>
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import store from '../store.js';
import FirebaseApp from '../api/firebaseconfig.js';

import logo from "../assets/TIX-IT logo light-export.png"

const auth = getAuth(FirebaseApp);
const provider = new GoogleAuthProvider();

export default {
  name: 'Login',
  data() {
    return {
      logo: logo,
      email: "",
      password: "",
      isSigningIn: false
    }
  },

  methods: {
    async signInWithGoogle() {
      this.isSigningIn = true;
      try {
        const result = await signInWithPopup(auth ,provider);

        //This gives a Google Access Token, use it to access Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // info of the user that signed in
        const user = result.user;
        
        //check if its users first login
        const userDocRef = admin.firestore().collection('users').doc(user.uid);
        const userDoc = await userDocRef.get();

        if(!userDoc.exists){
          //call HTTP function to create users document, so their account is stored in db
          await fetch('http://localhost:port/tixit/region/createUserDoc', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              uid: user.uid,
              email: user.email,
              role: 'user'
            })
          })
          .then(response => response.text())
          //.then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        }

        store.commit('setLoggedIn', true);
        this.$router.push({ name: 'Home' });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        //console.log('error code:', errorCode, 'error message:', errorMessage, 'credential:', credential);
        throw error;
      } finally {
        this.isSigningIn = false;
      }
    },
    async customSignInWithEmailAndPassword(){
      const email = this.email.trim();
      const password = this.password;
      //move email pattern to signup
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        console.error("Invalid email format");
        return;
      }
      try{
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        //Signed in
        const user = userCredential.user;
        store.commit('setLoggedIn', true);
        this.$router.push({ name: 'Home' });
        //..
      }
      catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code == 'auth/invalid-email') {
          console.error("Invalid email address");
        }
        console.log(errorCode);
        console.log(errorMessage);
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
  justify-content: center;
  align-items: center;
}

.rectangle img {
  width: 130px;
  height: 40px;
  margin-left: 10px;
  margin-top: 10px;
}

.rectangle h1 {
  font-size: 40px;
  font-weight: bold;
  padding-top: 15px;
  text-align: center;
}

.rectangle .register input[type="email"],
.rectangle .register input[type="password"] {
  width: 300px;
  height: 50px;
  display: block;
  margin-bottom: 5px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
}

.rectangle .register .forgot-password {
  margin-left: 200px;
  margin-bottom: -5px; /* Adjusted margin-bottom */
  font-size: 9px;
  font-weight: bold;
  color: white; /* Added white color */
}

.rectangle button {
  margin-bottom: 10px;
  width: 300px;
  height: 50px;
  background-color: #005582;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

/* Updated the class selector */
.login-button-container {
  position: relative;
  top: -10px; /* Adjusted top position to move the button up */
}

.sign-up-link {
  color: white;
  font-weight: bold;
  font-size: 11px;
}

.signup p {
  text-align: center;
}

</style>