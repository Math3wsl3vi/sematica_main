<template>
  <nav class="bg-white shadow-lg px-6 py-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo with Icon -->
      <div class="flex items-center gap-2">
        <img
          src="../assets/img/SEMATICA.png"
          alt="Sematica Icon"
          class="w-10 h-10 object-contain"
        >
        <h1 class="text-2xl font-bold text-blue-600">Sematicca</h1>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Hamburger Button for Mobile -->
      <button
        class="md:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="md:hidden bg-white shadow-lg mt-2 rounded-lg overflow-hidden animate-slide-in"
    >
      <ul class="flex flex-col items-center py-4">
        <li v-for="link in navLinks" :key="link.to" class="w-full">
          <NuxtLink
            :to="link.to"
            class="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-center"
            @click="toggleMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/assistant', label: 'Assistant Builder' },
  { to: '/onboarding', label: 'Onboarding' },
  { to: '/integration', label: 'Integrations' },
];

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
nav {
  transition: box-shadow 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideIn 0.3s ease-out forwards;
}
</style>