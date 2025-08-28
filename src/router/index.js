// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/skills", name: "Skills", component: Skills },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
