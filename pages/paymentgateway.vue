<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
    <div class="flex w-full md:max-w-7xl bg-white shadow-2xl overflow-hidden">
      <!-- Left Side -->
      <div class="w-1/2 p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex flex-col justify-center">
        <h1 class="text-4xl font-bold mb-2">Set Up Your Payments 💸</h1>
        <p class="text-xl font-medium opacity-90">Enable seamless transactions for your {{ appType }} shop!</p>
        <p class="text-sm mt-4 opacity-80">Choose your preferred payment gateways to start accepting payments from customers.</p>
        <div class="mt-10">
          <span class="text-sm opacity-70">Powered by</span>
          <h2 class="text-lg font-semibold">YourAppName</h2>
        </div>
      </div>

      <!-- Right Side: Payment Gateway Setup Form -->
      <div class="w-1/2 p-12 flex flex-col justify-center">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Configure Payment Gateways</h2>
        
        <form class="space-y-6" @submit.prevent="handlePaymentSetup">
          <!-- Payment Gateway Selection -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-3">Select Payment Gateways</label>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div
                v-for="gateway in availableGateways"
                :key="gateway.id"
                class="cursor-pointer group"
                @click="toggleGateway(gateway.id)"
              >
                <div
                  class="flex flex-col items-center justify-center p-6 rounded-xl border transition-all 
                         duration-300 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1"
                  :class="[
                    selectedGateways.includes(gateway.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 bg-white hover:bg-gray-50'
                  ]"
                >
                  <!-- Icon -->
                  <div
                    class="w-12 h-12 mb-3 flex items-center justify-center rounded-full"
                    :class="[
                      selectedGateways.includes(gateway.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
                    ]"
                  >
                    <Icon :name="gateway.icon" class="w-6 h-6" />
                  </div>
                  <h3
                    class="font-semibold"
                    :class="selectedGateways.includes(gateway.id) ? 'text-blue-700' : 'text-gray-800'"
                  >
                    {{ gateway.name }}
                  </h3>
                  <p class="text-sm text-gray-500 mt-1 text-center">{{ gateway.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Gateway-Specific Configuration -->
          <div v-for="gateway in selectedGateways" :key="gateway" class="border-t pt-4">
            <div v-if="gateway === 'mpesa'">
              <h3 class="text-lg font-medium text-gray-800 mb-2">M-Pesa Configuration</h3>
              <RadixTextField
                v-model="mpesaConfig.shortCode"
                label="M-Pesa Business Short Code"
                placeholder="e.g., 123456"
              />
              <RadixTextField
                v-model="mpesaConfig.passkey"
                label="M-Pesa Passkey"
                placeholder="Enter your M-Pesa passkey"
              />
            </div>

            <div v-if="gateway === 'stripe'">
              <h3 class="text-lg font-medium text-gray-800 mb-2">Stripe Configuration</h3>
              <RadixTextField
                v-model="stripeConfig.apiKey"
                label="Stripe API Key"
                placeholder="e.g., sk_test_xxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <RadixTextField
                v-model="stripeConfig.webhookSecret"
                label="Webhook Secret (Optional)"
                placeholder="e.g., whsec_xxxxxxxxxxxxxxxxxxxxxxxx"
              />
            </div>

            <div v-if="gateway === 'paypal'">
              <h3 class="text-lg font-medium text-gray-800 mb-2">PayPal Configuration</h3>
              <RadixTextField
                v-model="paypalConfig.clientId"
                label="PayPal Client ID"
                placeholder="e.g., Axxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              />
              <RadixTextField
                v-model="paypalConfig.clientSecret"
                label="PayPal Client Secret"
                placeholder="Enter your PayPal client secret"
              />
            </div>
          </div>

          <!-- Currency Selection -->
          <div>
            <label class="block text-gray-700 text-sm font-medium mb-1">Preferred Currency</label>
            <SelectRoot v-model="currency">
              <SelectTrigger class="w-full px-4 py-3 border border-gray-300 rounded-lg">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent class="bg-white rounded-lg shadow-lg w-full">
                <SelectItem value="KES">KES (Kenyan Shilling)</SelectItem>
                <SelectItem value="USD">USD (US Dollar)</SelectItem>
                <SelectItem value="GBP">GBP (British Pound)</SelectItem>
                <SelectItem value="EUR">EUR (Euro)</SelectItem>
              </SelectContent>
            </SelectRoot>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Save Payment Settings
          </button>
        </form>

        <p class="text-sm text-gray-600 mt-6 text-center">
          Need to go back? 
          <a href="/setup" class="text-blue-600 font-medium hover:underline">Return to Shop Setup</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from "radix-vue";

import RadixTextField from "@/components/RadixTextField.vue";

const route = useRoute();
const appType = computed(() => {
  return route.path.includes("commerce") ? "E-Commerce" : "Restaurant";
});

// Reactive form fields
const selectedGateways = ref([]);
const currency = ref("");
const mpesaConfig = ref({ shortCode: "", passkey: "" });
const stripeConfig = ref({ apiKey: "", webhookSecret: "" });
const paypalConfig = ref({ clientId: "", clientSecret: "" });
const router = useRouter(); 

// Available payment gateways
const availableGateways = ref([
  {
    id: "mpesa",
    name: "M-Pesa",
    desc: "Mobile payments",
    icon: "mdi:cellphone"
  },
  {
    id: "stripe",
    name: "Stripe",
    desc: "Card payments",
    icon: "mdi:credit-card-outline"
  },
  {
    id: "paypal",
    name: "PayPal",
    desc: "Global wallet",
    icon: "mdi:paypal"
  }
]);

function toggleGateway(id) {
  if (selectedGateways.value.includes(id)) {
    selectedGateways.value = selectedGateways.value.filter(g => g !== id);
  } else {
    selectedGateways.value.push(id);
  }
}

function handlePaymentSetup() {
    router.push("/socialhandles");
  // TODO: send to backend
}
</script>
