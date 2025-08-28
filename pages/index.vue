<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 font-inter">
    <div class="container mx-auto px-4 md:px-6 py-8">
      <!-- Main Dashboard Content -->
      <main class="space-y-8">
        <!-- Welcome Section -->
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Welcome to Your Dashboard!</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started by adding your first app to unlock powerful analytics and grow your business.
          </p>
        </div>

        <!-- Empty State for Analytics -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 text-center">
          <div class="mb-6">
            <svg class="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">No Apps Yet</h3>
          <p class="text-gray-500 mb-6">Create an app to start tracking analytics and insights for your business.</p>
        </div>

        <!-- Quick Actions Grid -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">Add Your First App</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <NuxtLink
              to="/commerce/setup"
              class="group flex flex-col items-center justify-center p-5 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform">
                <i class="fas fa-shopping-cart text-xl text-blue-600"/>
              </div>
              <h3 class="font-semibold text-gray-800 text-center mb-2">E-Commerce</h3>
              <p class="text-xs text-gray-500 text-center">Set up your online store and track sales performance.</p>
            </NuxtLink>
            <NuxtLink
              to="/restaurant/setup"
              class="group flex flex-col items-center justify-center p-5 rounded-xl border border-gray-200 hover:bg-orange-50 hover:border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform">
                <i class="fas fa-utensils text-xl text-orange-600"/>
              </div>
              <h3 class="font-semibold text-gray-800 text-center mb-2">Restaurant</h3>
              <p class="text-xs text-gray-500 text-center">Manage your restaurant and monitor orders.</p>
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
// No additional script logic needed for the empty dashboard
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.font-inter {
  font-family: 'Inter', sans-serif;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>