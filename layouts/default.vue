<template>
  <div class="min-h-screen flex flex-col">
    <!-- NavbarCard -->
    <NavbarCard />

    <!-- Main content -->
    <main class="flex-grow min-h-screen">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup>
import NavbarCard from '~/components/NavbarCard.vue'
import AppFooter from '~/components/AppFooter.vue'
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
