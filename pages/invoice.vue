<template>
  <div class="min-h-screen bg-gray-100 font-inter">

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-8">
      <!-- Invoice Template Editor -->
      <section class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 mb-8 shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Invoice Template Editor</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Template Name</label>
            <input
              v-model="template.name"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Standard Invoice"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Header Text</label>
            <input
              v-model="template.header"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Sematica Solutions"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Footer Text</label>
            <input
              v-model="template.footer"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-600"
              placeholder="e.g., Thank you for your business!"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Primary Color</label>
           <input
            v-model="template.color"
            type="color"
            class="w-full h-10 border border-gray-300 rounded-xl"
            >
          </div>
        </div>
        <button
          class="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          @click="saveTemplate"
        >
          Save Template
        </button>
      </section>

      <!-- Invoices Table -->
      <section class="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Invoices</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="text-gray-600 text-sm">
                <th class="p-4">Invoice ID</th>
                <th class="p-4">Customer</th>
                <th class="p-4">Amount (KES)</th>
                <th class="p-4">Status</th>
                <th class="p-4">Date</th>
                <th class="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="invoice in invoices"
                :key="invoice.id"
                class="border-t border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td class="p-4">{{ invoice.id }}</td>
                <td class="p-4">{{ invoice.customerName }}</td>
                <td class="p-4">{{ invoice.amount.toLocaleString() }}</td>
                <td class="p-4">
                  <span
                    :class="[
                      'px-3 py-1 rounded-full text-sm font-semibold',
                      invoice.status === 'Paid' ? 'bg-green-100 text-green-600' :
                      invoice.status === 'Unpaid' ? 'bg-red-100 text-red-600' :
                      'bg-yellow-100 text-yellow-600'
                    ]"
                  >
                    {{ invoice.status }}
                  </span>
                </td>
                <td class="p-4">{{ formatDate(invoice.date) }}</td>
                <td class="p-4 flex gap-2">
                  <button
                    v-if="invoice.status !== 'Paid'"
                    class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    @click="sendReminder(invoice)"
                  >
                    Send Reminder
                  </button>
                  <button
                    class="px-3 py-1 border border-gray-300 text-gray-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
                    @click="viewReceipt(invoice)"
                  >
                    View Receipt
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { format } from 'date-fns';

const template = ref({
  name: 'Standard Invoice',
  header: 'Sematica Solutions',
  footer: 'Thank you for your business!',
  color: '#2563EB',
});

// Dummy invoices
const invoices = ref([
  { id: 'INV001', customerName: 'Alice Johnson', amount: 12500, status: 'Paid', date: new Date('2025-08-01') },
  { id: 'INV002', customerName: 'Brian Kim', amount: 8500, status: 'Unpaid', date: new Date('2025-08-05') },
  { id: 'INV003', customerName: 'Carlos Lopez', amount: 19200, status: 'Pending', date: new Date('2025-08-10') },
  { id: 'INV004', customerName: 'Diana Smith', amount: 4500, status: 'Paid', date: new Date('2025-08-15') },
]);

// Save template (dummy)
const saveTemplate = () => {
  alert(`Template "${template.value.name}" saved!`);
};

// Format date
const formatDate = (date) => format(new Date(date), 'MMM dd, yyyy');

// Dummy actions
const sendReminder = (invoice) => {
  alert(`Reminder sent to ${invoice.customerName} for invoice ${invoice.id}`);
};

const viewReceipt = (invoice) => {
  const receipt = `
    Invoice #${invoice.id}
    Customer: ${invoice.customerName}
    Amount: KES ${invoice.amount.toLocaleString()}
    Status: ${invoice.status}
    Date: ${formatDate(invoice.date)}
    Header: ${template.value.header}
    Footer: ${template.value.footer}
  `;
  alert(receipt);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

table {
  min-width: 100%;
}

tr {
  transition: background-color 0.3s ease;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
