<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow min-h-screen">
      <slot />
    </main>
    <AppFooter/>
  </div>
</template>

<script setup>
// Removed NavbarCard import since it’s no longer used
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
