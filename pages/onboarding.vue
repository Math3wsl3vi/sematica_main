<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Company Onboarding</h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
      Get started with Sematicca by setting up your business profile.
    </p>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <form @submit.prevent="submitOnboarding" class="space-y-4">
        <div>
          <label for="businessName" class="block text-gray-700 font-medium mb-2">Business Name</label>
          <input
            id="businessName"
            v-model="form.businessName"
            type="text"
            placeholder="Business Name"
            class="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            class="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label for="businessType" class="block text-gray-700 font-medium mb-2">Business Type</label>
          <select
            id="businessType"
            v-model="form.businessType"
            class="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option disabled value="">Select Business Type</option>
            <option>Hotel</option>
            <option>Retail</option>
            <option>Clinic</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full"
          :disabled="!form.businessName || !form.email || !form.businessType"
        >
          Continue
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  businessName: '',
  email: '',
  businessType: '',
});

const submitOnboarding = () => {
  // Simulate form submission (replace with actual API call)
  console.log('Onboarding data:', form.value);
  alert('Onboarding completed! Redirecting to dashboard...');
  router.push('/dashboard');
  form.value = { businessName: '', email: '', businessType: '' }; // Reset form
};
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