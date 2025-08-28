<template>
  <aside :class="`${isCollapsed ? 'w-16' : 'w-72'} min-h-screen bg-white border-r border-gray-200 shadow-sm transition-all duration-300 relative`">
    <!-- Header -->
    <!-- <div class="p-6 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <button
          class="p-1 rounded-lg hover:bg-gray-100 transition-colors"
          @click="toggleSidebar"
        >
          <i v-if="isCollapsed" class="fas fa-chevron-right w-4 h-4 text-gray-500"/>
          <i v-else class="fas fa-chevron-left w-4 h-4 text-gray-500"/>
        </button>
      </div>
    </div> -->

    <!-- Navigation -->
    <div class="p-4">
      <div v-if="!isCollapsed" class="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
        Get Started
      </div>
      
      <nav>
        <ul class="space-y-1">
          <li v-for="item in navigationItems" :key="item.name">
            <RouterLink
              :to="item.path"
              :class="`w-full flex items-center ${isCollapsed ? 'justify-center px-2' : 'px-3'} py-2.5 rounded-lg text-left transition-all duration-200 group no-underline`"
              active-class="bg-blue-50 text-blue-600 border border-blue-200"
              class="text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              @click="setActiveItem(item.name)"
            >
              <i 
                :class="`${item.icon} ${isCollapsed ? 'text-lg' : 'text-sm'} text-gray-500 group-hover:text-gray-700 transition-colors`"
              />
              <span v-if="!isCollapsed" class="ml-3 text-sm font-medium">
                {{ item.name }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Bottom Section - AI Assistant -->
    <div v-if="!isCollapsed" class="absolute bottom-4 left-4 right-4">
      <div class="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <div class="flex items-center space-x-3 mb-2">
          <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <i class="fas fa-user text-white text-sm"/>
          </div>
          <div>
            <h4 class="text-sm font-medium text-gray-900">Username</h4>
            <p class="text-xs text-gray-600">user@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeItem = ref('Home')
const isCollapsed = ref(false)

const navigationItems = ref([
{ name: 'Dashboard', path: '/', icon: 'fas fa-home' },
  { name: 'Assistant Builder', path: '/assistant', icon: 'fas fa-robot' },
  { name: 'Templates', path: '/integration', icon: 'fas fa-layer-group' },
  { name: 'Integrations', path: '/omnichanel', icon: 'fas fa-plug' },
  { name: 'Analytics', path: '/analytics', icon: 'fas fa-chart-bar' },
  { name: 'Invoice', path: '/invoice', icon: 'fas fa-file-invoice' },
  { name: 'Payment', path: '/payments', icon: 'fas fa-credit-card' },
  { name: 'Settings', path: '/settings', icon: 'fas fa-cog' },
])

const setActiveItem = (itemName) => {
  activeItem.value = itemName
}

// const toggleSidebar = () => {
//   isCollapsed.value = !isCollapsed.value
// }
</script>

<style scoped>
.router-link-active {
  background-color: rgb(239 246 255);
  color: rgb(37 99 235);
  border: 1px solid rgb(147 197 253);
}

.router-link-active i {
  color: rgb(37 99 235);
}

.router-link-active span {
  color: rgb(37 99 235);
}
</style>