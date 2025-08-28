<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <NavbarCard />

    <!-- Main content with sidebar -->
    <div class="flex flex-grow min-h-screen">
      <!-- Sidebar -->
      <AppSidebar class="w-52 border-r border-gray-200 bg-white shadow-sm" />

      <!-- Page content -->
      <main class="flex-grow p-6 bg-gray-50">
        <slot />
      </main>
    </div>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import NavbarCard from '~/components/NavbarCard.vue'
import AppFooter from '~/components/AppFooter.vue'
import AppSidebar from '~/components/AppSidebar.vue'
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>
