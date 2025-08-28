<template>
  <footer class="bg-white border-t border-gray-200 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex flex-col sm:flex-row justify-between items-center">
        <!-- Left side - Copyright -->
        <div class="flex items-center space-x-4">
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} sematicca. All rights reserved.
          </p>
          <span class="text-gray-300">|</span>
          <p class="text-sm text-gray-500">
            Version {{ appVersion }}
          </p>
        </div>

        <!-- Right side - Quick links -->
        <div class="flex items-center space-x-6 mt-3 sm:mt-0">
          <a 
            href="mailto:support@sematicca.com" 
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center"
          >
            <i class="fas fa-envelope mr-2"/>
            Support
          </a>
          <RouterLink 
            to="/help" 
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center"
          >
            <i class="fas fa-question-circle mr-2"/>
            Help
          </RouterLink>
          <RouterLink 
            to="/settings/privacy" 
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Privacy
          </RouterLink>
          <RouterLink 
            to="/settings/terms" 
            class="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Terms
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

// You can make this dynamic based on your app's version
const appVersion = '1.2.4'
</script>

<style scoped>
/* Ensure footer sticks to bottom of page */
footer {
  flex-shrink: 0;
}
</style>