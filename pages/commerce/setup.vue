<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
    <div class="flex flex-col md:flex-row w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      
      <!-- Left Side -->
      <div class="w-full md:w-1/2 p-6 md:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col justify-center text-center md:text-left">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Set Up Your Business</h1>
        <p class="text-lg md:text-xl font-medium opacity-90">Create your shop in minutes!</p>
        <p class="text-sm mt-4 opacity-80">Connect with customers and grow your business with ease.</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematicca</h2>
        </div>
      </div>

      <!-- Right Side: Setup Form -->
      <div class="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
        <h2 class="text-xl md:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
          Set Up Your E-Commerce Store
        </h2>
        
        <form class="space-y-5" @submit.prevent="handleSetup">
          <!-- Business Name -->
          <RadixTextField 
            v-model="businessName" 
            label="Business Name" 
            placeholder="e.g., Joe's Boutique or Tasty Bites" 
          />

          <!-- Business Type Specific Fields -->
          <template v-if="appType === 'E-Commerce'">
            <!-- Product Categories -->
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-1">Product Categories</label>
              <SelectRoot v-model="productCategories">
                <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <SelectValue placeholder="Select main product category" />
                </SelectTrigger>
                <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                  <SelectItem value="fashion">Fashion & Apparel</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="home">Home & Furniture</SelectItem>
                  <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                </SelectContent>
              </SelectRoot>
            </div>

            <!-- Store Type -->
            <RadixTextField 
              v-model="storeType" 
              label="Store Type" 
              placeholder="e.g., Online Only, Physical + Online" 
            />
          </template>

          <template v-else-if="appType === 'Restaurant'">
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
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </SelectRoot>
            </div>
          </template>

          <!-- Business Email -->
          <RadixTextField 
            v-model="businessEmail" 
            label="Business Email" 
            type="email" 
            placeholder="e.g., contact@yourbusiness.com" 
          />

          <!-- Phone Number -->
          <RadixTextField 
            v-model="phone" 
            label="Phone Number" 
            placeholder="e.g., +254 700 123 456" 
          />

          <!-- Physical Address -->
          <RadixTextField 
            v-model="address" 
            label="Physical Address" 
            placeholder="e.g., 123 Main St, Nairobi" 
          />

          <!-- Submit Button -->
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Create My Shop
          </button>
        </form>

        <p class="text-sm text-gray-600 mt-6 text-center">
          Already have a shop? 
          <a href="/" class="text-blue-600 font-medium hover:underline">Go to Dashboard</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "radix-vue";

// Import reusable text input
import RadixTextField from "@/components/RadixTextField.vue";

// Get appType from route params (e.g., /commerce/setup or /restaurant/setup)
const route = useRoute();
const router = useRouter();
const appType = computed(() => {
  return route.path.includes('commerce') ? 'E-Commerce' : 'Restaurant';
});

// Reactive form fields
const businessName = ref("");
const productCategories = ref("");
const storeType = ref("");
const cuisineType = ref("");
const seatingCapacity = ref("");
const deliveryOption = ref("");
const businessEmail = ref("");
const phone = ref("");
const address = ref("");

function handleSetup() {
  router.push("/paymentgateway"); // Redirect to dashboard after setup
}
</script>