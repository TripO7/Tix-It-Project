<template>
    <h1>Welcome to Tix-it</h1>
    <p class="sub_heading">Your home for customer service</p>
    <section>
        <img class="pic1 slide-in-left" src="../assets/pic_1.png">
        <p class="text_1">The future of tech support is now. Immerse yourself in our ticket system's intuitive design
        <br> a game-changer that transforms troubleshooting into a joyride.</p>
    </section>
    <section class="content_2">
        <img class="pic2 slide-in-right" src="../assets/pic_2.png">
        <p class="text_2">Experience seamless solutions at your fingertips.
        <br> Our ticket tech support is your express lane to hassle-free resolutions.</p>
    </section>
    <section>
        <img class="pic3 slide-in-left" src="../assets/pic_3.png">
        <p class="text_3">Facing a technological conundrum? Fret not. Our ticket support website is at your service,
        <br> ready to tackle any inquiry you throw our way.</p>
    </section>
</template>

<script scoped>
export default{
    name: 'Landing',
}

</script>

<style scoped>
body::-webkit-scrollbar {
    display: none;
}

html, body {
    overflow: hidden;
}

body {
    scrollbar-width: none;
}

.head {
    position: sticky;
    display: flex;
    top: 0;
    width: 100%;
    background: #00c2c7;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    z-index: 999;
}

.logo {
    padding: 10px;
    height: 120px;
    width: 347px;
}

nav {
    margin-right: 10px;
}

nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

nav li {
    display: inline-block;
    margin-left: 50px;
    padding-top: 52px;
}

nav a {
    color: #daf8e3;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 15px;
}

nav a:hover {
    color: #005582;
}

h1 {
    margin-top: 200px;
    font-size: 120px;
    text-align: center;
    font-weight: bolder;
}

.sub_heading {
    font-size: 25px;
    text-align: center;
    margin-bottom: 100px;
}

.pic1,
.pic2,
.pic3 {
    margin-top: 200px;
    height: 500px;
    width: 800px;
    border-radius: 30px;
}

.text_2 {
    margin-right: 30px;
    text-align: end;
}

.text_1,
.text_2,
.text_3 {
    margin-left: 30px;
    font-size: 19px;
}

.content_2 {
    margin-left: 689px;
}

.text_3 {
    margin-bottom: 20px;
}

@keyframes slide_in_left {
    from {scale: .8; opacity: 0;}
    to{scale: 1; opacity: 1;}
}

@keyframes slide_in_right {
    from {scale: .8; opacity: 0;}
    to{scale: 1; opacity: 1;}
}

.slide-in-left {
    animation-name: slide_in_left;
    animation: slide_in_left linear;
    transform-origin: left;
    animation-timeline: view();
    animation-range-start: cover;
    animation-range-end: 500px;
}

.slide-in-right {
    animation-name: slide_in_right;
    animation: slide_in_right linear;
    transform-origin: right;
    animation-timeline: view();
    animation-range-start: cover;
    animation-range-end: 500px;
}   
</style>