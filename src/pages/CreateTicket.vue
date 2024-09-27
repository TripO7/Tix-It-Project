<template>
  <div class="rectangle">
    <div class="register">
      <h1 style="margin-top: 20px;">CREATE A TICKET</h1>
      <input type="text" placeholder="first name" style="margin-top: 25px;">
      <input type="text" placeholder="last name" style="margin-top: 5px;">
      <input type="email" placeholder="username@email.com" style="margin-top: 5px;">
      <input type="text" placeholder="Description of issue" style="height: 100px; margin-top: 5px;">
      <input type="text" placeholder="Company Support Needed From" style="margin-top: 5px;">
      <div style="margin-top: -10px;"> <!-- Adjusted margin-top -->
        <button @click="submit" style="width: 300px;">SUBMIT</button> <!-- Adjusted button width -->
        <div id="overlay"></div>
        <img id="ticketGif" src="../assets/ticket_animation.gif"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'CreateTicket',
  methods: {
    submit() {
      document.getElementById('overlay').style.display = 'block';
      let gif = document.getElementById('ticketGif');
      let src = gif.src;
      gif.src = '';

      setTimeout(() => {
        gif.src = src;
      }, 100);

      gif.style.display = 'block'; 

      //doin this so it only displays for a certain length cuz a few second at the end of the gif is just a dot and dont want it to be a dot i the mid
      setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        gif.style.display = 'none';
      }, 3690);
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
}

.register {
  margin-top: 20px;
}

.register input {
  width: 300px;
  height: 50px;
  padding-left: 20px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10px;
}

.register button {
  width: 300px;
  height: 50px;
  background: #005582;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

#overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 40, 77, 0.7);
  transition: background 1s ease-in-out;
}

#ticketGif {
  outline-offset: none;
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 700px; /* Adjust as needed */
  height: 650px;
}
</style>