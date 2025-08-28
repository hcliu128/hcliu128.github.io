<style>
@import url('https://fonts.googleapis.com/css2?family=Libertinus+Keyboard&display=swap');
</style>

<script setup>
const name = 'hcliu128'
const motto = 'Work Hard, Play Hard'
</script>

<template>
  <div class="home-container">
    <div class="left-panel">
      <img src="../../fig/selfie.png" alt="Profile Picture" class="profile-picture" />
      <pre><code>{{ name }}</code></pre>
      <p class="libertinus-keyboard-regular">{{ motto }}</p>
    </div>

    <div class="right-panel">
      <h2>About Me</h2>
      <p>
        Hi there, I am Howard, aka <code>{{ name }}</code> in the web,
        a CS-majored student in Taiwan. Welcome to my page, which is built with Vue.js.
      </p>
      <p>
        Besides, this is my first time using Vue.js to create a personal portfolio page:)). 
        I am passionate about coding and eager to cooperate with those with the craziest ideas! 
        Feel free to <router-link to="/contact" class="contact-link">contact</router-link> me 
        if you want to know more about me.
      </p>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
}

.left-panel {
  flex: 1;
  text-align: center;
}

.right-panel {
  flex: 2;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}

/* 頭像 */
.profile-picture {
  width: 180px;
  height: 205px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #eee;
  margin-bottom: 1rem;
}

.contact-link {
  color: #007bff; 
  text-decoration: none;
  font-weight: bold;
}

.contact-link:hover {
  text-decoration: underline;
}

.contact-link:visited {
  color: #007bff;   
}

.libertinus-keyboard-regular {
  font-family: "Libertinus Keyboard", system-ui;
  font-weight: 400;
  font-style: normal;
}

/* RWD */
@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .right-panel {
    text-align: left;
    width: 100%;
  }
}
</style>
