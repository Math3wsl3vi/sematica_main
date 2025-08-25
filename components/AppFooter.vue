<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-36">
        <!-- Brand and Newsletter -->
        <div class="space-y-6">
          <div class="flex items-center space-x-2">
                      <img
             src="../assets/img/SEMATICA.png"
          alt="sematicca Icon"
          class="w-10 h-10 object-contain"
        >

            <span class="text-2xl font-bold text-white">sematicca</span>
          </div>
          <p class="text-gray-400 max-w-xs">
            Automate your business with AI-driven chat, voice, and commerce solutions.
          </p>
          <div class="space-y-4 pt-4">
            <h3 class="text-lg font-bold text-white">Stay Updated</h3>
            <form class="flex flex-col sm:flex-row gap-2" @submit.prevent="subscribeNewsletter">
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                aria-label="Email for newsletter"
              >
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                <span v-if="isSubmitting">Subscribing...</span>
                <span v-else>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Products</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/voice-commerce" class="hover:text-blue-400 transition-colors">Voice Commerce</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/crm" class="hover:text-blue-400 transition-colors">CRM</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/invoicing" class="hover:text-blue-400 transition-colors">Invoicing</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/payments" class="hover:text-blue-400 transition-colors">Payments</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/whatsapp" class="hover:text-blue-400 transition-colors">WhatsApp Business</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/analytics" class="hover:text-blue-400 transition-colors">Analytics</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Resources</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/pricing" class="hover:text-blue-400 transition-colors">Pricing</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/templates" class="hover:text-blue-400 transition-colors">Templates</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="hover:text-blue-400 transition-colors">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/docs" class="hover:text-blue-400 transition-colors">Documentation</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/support" class="hover:text-blue-400 transition-colors">Support</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-bold text-white mb-4">Company</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="hover:text-blue-400 transition-colors">About</NuxtLink>
            </li>
            <li>
              <a href="https://app.sematicca.com/careers" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">Careers</a>
            </li>
            <li>
              <a href="mailto:support@sematicca.com" class="hover:text-blue-400 transition-colors flex items-center">
                <UIcon name="heroicons:envelope" class="w-5 h-5 mr-2" aria-hidden="true" />
                support@sematicca.com
              </a>
            </li>
            <li>
              <a href="tel:+254700000000" class="hover:text-blue-400 transition-colors flex items-center">
                <UIcon name="heroicons:phone" class="w-5 h-5 mr-2" aria-hidden="true" />
                +254 700 000 000
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
        <p class="text-sm text-gray-400">
          &copy; {{ new Date().getFullYear() }} sematicca. All rights reserved.
        </p>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://x.com/sematicca" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors" aria-label="Twitter/X">
            <UIcon name="mdi:twitter" class="w-6 h-6" aria-hidden="true" />
          </a>
          <a href="https://linkedin.com/company/sematicca" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
            <UIcon name="mdi:linkedin" class="w-6 h-6" aria-hidden="true" />
          </a>
          <a href="https://facebook.com/sematicca" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors" aria-label="Facebook">
            <UIcon name="mdi:facebook" class="w-6 h-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const isSubmitting = ref(false)

const subscribeNewsletter = async () => {
  isSubmitting.value = true
  try {
    await $fetch('/api/newsletter/subscribe', {
      method: 'POST',
      body: { email: email.value }
    })
    email.value = ''
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    // Handle error (e.g., show an error message)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
/* Add custom styles if needed to override Tailwind defaults */
</style>