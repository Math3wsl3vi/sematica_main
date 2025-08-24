<template>
  <section class="container mx-auto px-4 py-12">
    <h2 class="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">Assistant Builder</h2>
    <p class="text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in" style="animation-delay: 0.2s;">
      Create and manage your voice/chat logic flows with our no-code builder.
    </p>
    <div class="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <form @submit.prevent="saveAssistant" class="space-y-4">
        <div>
          <label for="assistantName" class="block text-gray-700 font-medium mb-2">Assistant Name</label>
          <input
            id="assistantName"
            v-model="form.assistantName"
            type="text"
            placeholder="Enter assistant name"
            class="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label for="voiceTone" class="block text-gray-700 font-medium mb-2">Voice Tone</label>
          <select
            id="voiceTone"
            v-model="form.voiceTone"
            class="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          >
            <option disabled value="">Select tone</option>
            <option>Friendly</option>
            <option>Professional</option>
            <option>Casual</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full"
          :disabled="!form.assistantName || !form.voiceTone"
        >
          Save Assistant
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  assistantName: '',
  voiceTone: '',
});

const saveAssistant = () => {
  // Simulate saving assistant configuration (replace with actual API call)
  console.log('Saving assistant:', form.value);
  alert('Assistant saved successfully!');
  form.value = { assistantName: '', voiceTone: '' }; // Reset form
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