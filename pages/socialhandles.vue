<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
    <div class="flex flex-col md:flex-row w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
         <!-- Left Side -->
      <div class="w-full md:w-1/2 p-6 md:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col justify-center text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Set Up Your Business Profiles</h1>
        <p class="text-lg md:text-xl font-medium opacity-90">Link your accounts and connect with customers</p>
        <p class="text-sm mt-4 opacity-80">Connect with customers and grow your business with ease.</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematicca</h2>
        </div>
      </div>
      
      <!-- right side -->
       <div class="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
          Set Up Your E-Commerce Store
        </h2>
        
        <form class="space-y-5" @submit.prevent="handleSetup">
          <!-- Business Name -->
          <RadixTextField 
            v-model="whatsapp" 
            label="Whatsapp Number" 
            placeholder="e.g., +254 700 123 456" 
          />

          <!-- Business Email -->
          <RadixTextField 
            v-model="instagram" 
            label="Instagram Handle" 
            placeholder="e.g., @yourbusiness" 
          />

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
           Continue
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Import reusable text input
import RadixTextField from "@/components/RadixTextField.vue";

// Get appType from route params (e.g., /commerce/setup or /restaurant/setup)
const router = useRouter();

// Reactive form fields
const whatsapp = ref("");
const instagram = ref("");

function handleSetup() {
  router.push("/afterdash"); // Redirect to dashboard after setup
}
</script>
