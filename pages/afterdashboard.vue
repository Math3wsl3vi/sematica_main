<template>
  <div class="flex min-h-screen bg-gray-50">
    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Header -->
      <header class="bg-white border-b border-gray-200 px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-semibold text-gray-900">Hi, {{ userName }}</h1>
          </div>
          <div class="flex items-center space-x-4">
            <!-- User Profile -->
            <div class="relative">
              <button
                class="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                @click="showProfileMenu = !showProfileMenu"
              >
                <div class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span class="text-white text-sm font-bold">{{ userInitials }}</span>
                </div>
                <span class="text-sm font-medium text-gray-700">{{ companyName }}</span>
                <i class="fas fa-chevron-down text-xs text-gray-500"/>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Dashboard Content -->
      <main class="flex-1 p-6">
        <!-- Welcome Message -->
        <div class="mb-6">
          <p class="text-gray-600">Craft engaging campaigns and stay on top of your analytics to supercharge your business!</p>
        </div>

        <!-- Account Setup Banner -->
        <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-8 relative">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 mb-1">Complete Account Setup</h3>
              <p class="text-gray-600 text-sm mb-3">Your account setup is not complete, kindly update to complete profile.</p>
              <button class="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                Complete Now →
              </button>
            </div>
            <button class="text-gray-400 hover:text-gray-600 transition-colors">
              <i class="fas fa-times"/>
            </button>
          </div>
        </div>

        <!-- Business Performance Metrics -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div class="p-6 border-b border-gray-200">
            <div class="flex justify-between items-center">
              <h2 class="text-xl font-semibold text-gray-900">Business performance metrics</h2>
              <div class="flex items-center space-x-4">
                <button class="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                  View Analytics →
                </button>
                <select class="border border-gray-300 rounded-lg px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>30 days</option>
                  <option>7 days</option>
                  <option>90 days</option>
                </select>
              </div>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <!-- Conversion Rate -->
            <div class="text-center">
              <div class="text-xs text-gray-500 mb-1 flex items-center justify-between">
                <span>Conversion Rate</span>
                <span>0%</span>
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-3">0%</div>
              <p class="text-xs text-blue-600 leading-relaxed">
                Boost conversion rates using Chapter's personalized marketing automation.
              </p>
            </div>

            <!-- Customer Engagement -->
            <div class="text-center">
              <div class="text-xs text-gray-500 mb-1 flex items-center justify-between">
                <span>Customer Engagement</span>
                <span>0%</span>
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-3">0</div>
              <p class="text-xs text-blue-600 leading-relaxed">
                Segment customers who have spent at least KES 5,000 in total.
              </p>
            </div>

            <!-- AI Chats Handled -->
            <div class="text-center">
              <div class="text-xs text-gray-500 mb-1 flex items-center justify-between">
                <span>AI Chats Handled</span>
                <span>0%</span>
              </div>
              <div class="text-3xl font-bold text-gray-900 mb-3">0</div>
              <p class="text-xs text-blue-600 leading-relaxed">
                Enhance average order values with Chapter's smart upselling and cross-selling features.
              </p>
            </div>

            <!-- Average Response Time -->
            <div class="text-center">
              <div class="text-xs text-gray-500 mb-1">Average Response Time</div>
              <div class="text-3xl font-bold text-gray-900 mb-3">0 seconds</div>
              <p class="text-xs text-blue-600 leading-relaxed">
                Drive revenue growth with Chapter's analytics-driven pricing and promotion strategies.
              </p>
            </div>
          </div>
        </div>

        <!-- AI Assistant Card -->
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

    <!-- Chat Widget (Bottom Right) -->
    <div class="fixed bottom-6 right-6">
      <button
        class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors relative"
        @click="toggleChat"
      >
        <i class="fas fa-comments text-lg"/>
        <div class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span class="text-xs font-bold">1</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const showProfileMenu = ref(false)
const userName = ref('mathews kulei')
const userInitials = ref('P')
const companyName = ref('mantle networks')



const toggleChat = () => {
  // Handle chat toggle logic here
  console.log('Chat toggled')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');


</style>