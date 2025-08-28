<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 p-4 md:p-10">
    <div class="flex flex-col md:flex-row w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      
      <!-- Left Side -->
      <div class="w-full md:w-1/2 p-6 md:p-12 bg-gradient-to-br from-orange-600 to-red-500 text-white flex flex-col justify-center text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Onboard Your Restaurant 🍽️</h1>
        <p class="text-lg md:text-xl font-medium opacity-90">Get your restaurant online in minutes</p>
        <p class="text-sm mt-4 opacity-80">Showcase your menu, take orders, and connect with more hungry customers.</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematicca</h2>
        </div>
      </div>

      <!-- Right Side: Setup Form -->
      <div class="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
          Restaurant Setup
        </h2>
        
        <form class="space-y-5" @submit.prevent="handleSetup">
          <!-- Restaurant Name -->
          <RadixTextField 
            v-model="businessName" 
            label="Restaurant Name" 
            placeholder="e.g., Mama’s Kitchen or Tasty Bites" 
          />

          <!-- Cuisine Type -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Cuisine Type</label>
            <SelectRoot v-model="cuisineType">
              <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <SelectValue placeholder="Select cuisine type" />
              </SelectTrigger>
              <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="african">African</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="fastfood">Fast Food</SelectItem>
                <SelectItem value="vegan">Vegan & Vegetarian</SelectItem>
              </SelectContent>
            </SelectRoot>
          </div>

          <!-- Seating Capacity -->
          <RadixTextField 
            v-model="seatingCapacity" 
            label="Seating Capacity" 
            placeholder="e.g., 50 seats" 
            type="number"
          />

          <!-- Delivery Option -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Delivery Option</label>
            <SelectRoot v-model="deliveryOption">
              <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <SelectValue placeholder="Select delivery option" />
              </SelectTrigger>
              <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                <SelectItem value="yes">Yes – We Deliver</SelectItem>
                <SelectItem value="pickup">Pickup Only</SelectItem>
                <SelectItem value="no">No Delivery</SelectItem>
              </SelectContent>
            </SelectRoot>
          </div>

          <!-- Business Email -->
          <RadixTextField 
            v-model="businessEmail" 
            label="Business Email" 
            type="email" 
            placeholder="e.g., contact@restaurant.com" 
          />

          <!-- Phone Number -->
          <RadixTextField 
            v-model="phone" 
            label="Phone Number" 
            placeholder="e.g., +254 700 123 456" 
          />

          <!-- Restaurant Address -->
          <RadixTextField 
            v-model="address" 
            label="Restaurant Address" 
            placeholder="e.g., 123 Foodie St, Nairobi" 
          />

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition font-medium"
          >
            Continue to Payments →
          </button>
        </form>

        <p class="text-sm text-gray-600 mt-6 text-center">
          Already have an account? 
          <a href="/" class="text-orange-600 font-medium hover:underline">Go to Dashboard</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "radix-vue";

// Import reusable text input
import RadixTextField from "@/components/RadixTextField.vue";

// Router
const router = useRouter();

// Reactive form fields
const businessName = ref("");
const cuisineType = ref("");
const seatingCapacity = ref("");
const deliveryOption = ref("");
const businessEmail = ref("");
const phone = ref("");
const address = ref("");

// Handle Submit
function handleSetup() {
  router.push("/paymentgateway"); // Redirect to payment setup after onboarding
}
</script>
