<script setup>
import { ref } from 'vue'

const skills = ref([
  { 
    name: 'Python', level: 85,
    description: 'I use Python for solving Leetcode. Also, I used it for some projects, including Web Application, Game Development, Discord Bot creation, and even Mobile App.',
    projects: [
      { title: 'Simple Socket-Based Game', link: '/projects/Wordle' },
      { title: 'Pacman Refactoring', link: '/projects/Pacman' },
      { title: 'Web Application', link: '/projects/ClassroomRentalSystem' },
      { title: 'Mobile App', link: '/projects/LifeRecorder' }
    ],
    expanded: false
  },
  { 
    name: 'C/C++', level: 80,
    description: 'C and C++ is my first programming language. Howerever, I only used it for my Operating System homework and some small projects.',
    projects: [
    ],
    expanded: false
  },
  { 
    name: 'Git', level: 80,
    description: 'I use Git for every project. I also built a logging system based on Git. It helps me record chats with generative AI and automatically generate notes in Obisidian.',
    projects: [],
    expanded: false
  },
  { 
    name: 'SQL', level: 80,
    description: 'I used SQL for database management in some projects, including a web application called Classroom Rental System.',
    projects: [{ title: 'Web Application', link: '/projects/ClassroomRentalSystem' }],
    expanded: false
  },
  { 
    name: 'Linux', level: 80,
    description: 'I had a project called Development of a construction photography system with occupational safety recognition capabilities, which required me to use Linux for server management and development environment setup in Jetson nano.',
    projects: [],
    expanded: false
  },
  { 
    name: 'Verilog/SystemVerilog', level: 75,
    description: 'I use Verilog/SystemVerilog for hardware design and digital logic. I experienced the whole process of the backend design flow, including synthesis, and APR. . Currently, I am learning more about RISC-V pipeline CPU design and applying it to real-world applications.',
    projects: [{ title: 'Hardware Description Language homework', link: '/projects/HDLHW' }],
    expanded: false
  },
  { 
    name: 'HTML/JavaScript', level: 60,
    description: 'I use HTML/JS for building personal websites and small web apps.',
    projects: [
      { title: 'Portfolio Website', link: '/' }
    ],
    expanded: false
  },
])

const toggleExpand = (skill) => {
  skill.expanded = !skill.expanded
}
</script>

<template>
  <div class="skills-page">
    <h2>My Skills</h2>
    <div 
      v-for="s in skills" 
      :key="s.name" 
      class="skill-card"
    >
      <div class="skill-header" @click="toggleExpand(s)">
        <span class="skill-name">{{ s.name }}</span>
        <span class="skill-level">{{ s.level }}%</span>
      </div>
      
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: s.level + '%' }"></div>
      </div>

      <transition name="expand">
        <div v-if="s.expanded" class="skill-details">
          <p>{{ s.description }}</p>
          <div v-if="s.projects.length">
            <p>Related Projects:</p>
            <ul>
              <li v-for="p in s.projects" :key="p.title">
                <router-link :to="p.link">{{ p.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.skills-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
}

.skill-card {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: transform 0.2s;
}
.skill-card:hover {
  transform: translateY(-2px);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 0.8rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #007bff, #00c6ff);
}

.skill-details {
  margin-top: 0.8rem;
  font-size: 0.95rem;
  color: #555;
}

.skill-details ul {
  list-style: none;
  padding: 0;
}

.skill-details li {
  margin: 0.3rem 0;
}

.skill-details a {
  color: #007bff;
  text-decoration: none;
}

.skill-details a:hover {
  text-decoration: underline;
}

.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
