<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.navbar {
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: #333;
  padding: 1rem;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.navbar a.router-link-active {
  text-decoration: underline;
}

.content {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}
</style>
