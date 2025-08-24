<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Dashboard</h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
      View analytics, manage assistants, and track performance with real-time insights.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(card, index) in dashboardCards" :key="card.title" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 animate-fade-in" :style="{ animationDelay: `${0.4 + index * 0.2}s` }">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ card.title }}</h3>
        <p class="text-gray-600">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const dashboardCards = [
  { title: 'Conversations', description: 'Monitor customer interactions across all channels.' },
  { title: 'Sales', description: 'Track revenue and conversion rates in real-time.' },
  { title: 'Feedback', description: 'Analyze sentiment and customer satisfaction.' },
];
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