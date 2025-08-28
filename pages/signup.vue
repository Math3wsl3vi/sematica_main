<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
    <div class="flex w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      
      <!-- Left Side -->
      <div class="w-1/2 p-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex flex-col justify-center">
        <h1 class="text-4xl font-bold mb-2">Welcome aboard</h1>
        <p class="text-xl font-medium opacity-90">Your customers deserve conversations that care</p>
        <p class="text-sm mt-4 opacity-80">Sematicca gives you the power to connect, engage, and grow</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">Sematica</h2>
        </div>
      </div>

      <!-- Right Side: Signup Form -->
      <div class="w-1/2 p-12 flex flex-col justify-center">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Create your account</h2>
        
        <form class="space-y-5" @submit.prevent="handleSignup">
          
          <!-- First + Last Name -->
          <div class="grid grid-cols-2 gap-4">
            <RadixTextField v-model="firstName" label="First Name" placeholder="first name" />
            <RadixTextField v-model="lastName" label="Last Name" placeholder="last name" />
          </div>

          <!-- Company -->
          <RadixTextField v-model="company" label="Company" placeholder="company name" />

          <!-- Country Dropdown -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Country</label>
            <SelectRoot v-model="country">
              <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <SelectValue placeholder="Select a country" />
              </SelectTrigger>
              <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                <SelectItem value="ke">🇰🇪 Kenya</SelectItem>
                <SelectItem value="us">🇺🇸 USA</SelectItem>
                <SelectItem value="uk">🇬🇧 UK</SelectItem>
              </SelectContent>
            </SelectRoot>
          </div>

          <!-- Phone -->
          <RadixTextField v-model="phone" label="Phone Number" placeholder="+254" />

          <!-- Email -->
          <RadixTextField v-model="email" label="Email Address" type="email" placeholder="hello@example.com" />

          <!-- Password -->
          <RadixTextField v-model="password" label="Password" type="password" placeholder="Enter your password" />

          <!-- Confirm Password -->
          <RadixTextField v-model="confirmPassword" label="Confirm Password" type="password" placeholder="Confirm your password" />

          <!-- Signup Button -->
          <button type="submit" class="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium">
            Get Started
          </button>
        </form>

        <p class="text-sm text-gray-600 mt-6 text-center">
          Already have an account? 
          <a href="/login" class="text-indigo-600 font-medium hover:underline">Login</a>
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

const firstName = ref("");
const lastName = ref("");
const company = ref("");
const country = ref("");
const phone = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

function handleSignup() {
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    company: company.value,
    country: country.value,
    phone: phone.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value,
  });
}
</script>
