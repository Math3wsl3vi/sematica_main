<template>
  <nav class="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 font-inter py-2">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
      <!-- Logo and Title -->
      <div class="flex items-center gap-2">
        <img src="../assets/img/SEMATICA.png" alt="Sematica Icon" class="w-8 h-8 object-contain" >
        <NuxtLink to="/dashboard" class="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors">
          Sematicca
        </NuxtLink>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-600">
        <li v-for="item in navigationItems" :key="item.path">
          <NuxtLink
            :to="item.path"
            class="hover:text-blue-600 transition-colors duration-150"
            :class="{ 'text-blue-600': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">
        <!-- Notifications -->
        <button class="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
          <i class="fas fa-bell text-gray-500 text-sm" />
          <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        </button>

        <!-- Settings -->
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <i class="fas fa-cog text-gray-500 text-sm" />
        </button>

        <!-- Time Display -->
        <div class="hidden sm:block text-xs text-gray-500">
          <span>{{ currentTime }}</span> | <span>{{ currentDate }}</span>
        </div>

        <!-- Hamburger Button for Mobile -->
        <button
          class="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <i :class="isMenuOpen ? 'fas fa-times text-sm' : 'fas fa-bars text-sm'" class="text-gray-500" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden bg-white border-b border-gray-100 absolute w-full shadow-md animate-slide-in"
    >
      <ul class="flex flex-col py-4 text-sm font-medium text-gray-600">
        <li v-for="item in navigationItems" :key="item.path" class="w-full">
          <NuxtLink
            :to="item.path"
            class="block py-2 px-6 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            @click="toggleMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Menu state
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Navigation items
const navigationItems = ref([
  { name: 'Dashboard', path: '/' },
  { name: 'Assistant Builder', path: '/assistant' },
  { name: 'Templates', path: '/integration' },
  { name: 'Integrations', path: '/omnichanel' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Invoice', path: '/invoice' },
  { name: 'Payment', path: '/payments' },
  { name: 'Settings', path: '/settings' },
]);

// Time and date
const currentTime = ref('');
const currentDate = ref('');

const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  currentDate.value = now.toLocaleDateString([], { month: 'short', day: 'numeric' });
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 60000); // Update every minute
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

.animate-slide-in {
  animation: slideIn 0.2s ease-out forwards;
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
</style>