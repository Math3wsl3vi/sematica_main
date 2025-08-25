<template>
  <div class="min-h-screen bg-gray-100 font-inter">

<!-- Hero Section -->
<section class="relative py-20 mb-12 rounded-b-3xl bg-gradient-to-b from-gray-50 to-gray-100">
  <div class="container mx-auto px-6 text-center max-w-5xl">
    <div class="animate-fade-in">
      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
        Smart Invoicing Made <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simple</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
        Create, customize, and send professional invoices with ease.  
        Integrate M-Pesa, Card Payments, and more — all in one place.
      </p>

    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
      <div class="px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-bold text-gray-900">5,000+</div>
        <div class="text-sm text-gray-500">Invoices Generated</div>
      </div>
      <div class="px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-bold text-gray-900">3+</div>
        <div class="text-sm text-gray-500">Payment Methods</div>
      </div>
      <div class="px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div class="text-3xl font-bold text-gray-900">99.9%</div>
        <div class="text-sm text-gray-500">Uptime Reliability</div>
      </div>
    </div>
  </div>
</section>


    <!-- Main Content -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">

      <!-- Invoice Template Editor -->
      <section class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">Invoice Template Editor</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Template Name</label>
            <input
              v-model="template.name"
              type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., Standard Invoice"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Select App</label>
            <select
              v-model="template.appId"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
            >
              <option value="">Select an App</option>
              <option v-for="app in apps" :key="app.id" :value="app.id">{{ app.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Payment Methods</label>
            <div class="flex flex-wrap gap-2">
              <label v-for="method in availablePaymentMethods" :key="method" class="flex items-center text-sm">
                <input
                  v-model="template.paymentMethods"
                  type="checkbox"
                  :value="method"
                  :disabled="!template.appId || !getAppPaymentMethods(template.appId).includes(method)"
                  class="mr-1 h-4 w-4"
                >
                <span :class="{ 'text-gray-400': !getAppPaymentMethods(template.appId).includes(method) }">
                  {{ method }}
                </span>
              </label>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Primary Color</label>
            <input
              v-model="template.color"
              type="color"
              class="w-full h-9 border border-gray-200 rounded-lg"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Header Text</label>
            <input
              v-model="template.header"
              type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., Sematica Solutions"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Footer Text</label>
            <input
              v-model="template.footer"
              type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., Thank you for your business!"
            >
          </div>
        </div>
        <button
          class="mt-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-md transition-all text-sm"
          :disabled="!template.name || !template.appId || !template.paymentMethods.length"
          @click="saveTemplate"
        >
          Save Template
        </button>
      </section>

      <!-- Auto-Generate Invoice Form -->
      <section class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-sm border border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">Generate Invoice</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Select Template</label>
            <select
              v-model="newInvoice.templateId"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
            >
              <option value="">Select a Template</option>
              <option v-for="template in templates" :key="template.id" :value="template.id">{{ template.name }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Customer Name</label>
            <input
              v-model="newInvoice.customerName"
              type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., John Doe"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Customer Contact</label>
            <input
              v-model="newInvoice.customerContact"
              type="text"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., 254723696767 or john@example.com"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">Amount (KES)</label>
            <input
              v-model.number="newInvoice.amount"
              type="number"
              class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 text-sm"
              placeholder="e.g., 5000"
            >
          </div>
        </div>
        <button
          class="mt-6 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-md transition-all text-sm"
          :disabled="!newInvoice.templateId || !newInvoice.customerName || !newInvoice.customerContact || !newInvoice.amount"
          @click="generateInvoice"
        >
          Generate Invoice
        </button>
      </section>

      <!-- Invoices Table -->
      <section class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 class="text-xl font-semibold text-gray-800 mb-6">Invoices</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="text-gray-600">
                <th class="p-3">Invoice ID</th>
                <th class="p-3">Customer</th>
                <th class="p-3">Amount (KES)</th>
                <th class="p-3">Status</th>
                <th class="p-3">Date</th>
                <th class="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="invoice in invoices"
                :key="invoice.id"
                class="border-t border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td class="p-3">{{ invoice.id }}</td>
                <td class="p-3">{{ invoice.customerName }}</td>
                <td class="p-3">{{ invoice.amount.toLocaleString() }}</td>
                <td class="p-3">
                  <span
                    :class="[
                      'px-2 py-1 rounded-full text-xs font-medium',
                      invoice.status === 'Paid' ? 'bg-green-100 text-green-600' :
                      invoice.status === 'Unpaid' ? 'bg-red-100 text-red-600' :
                      'bg-yellow-100 text-yellow-600'
                    ]"
                  >
                    {{ invoice.status }}
                  </span>
                </td>
                <td class="p-3">{{ formatDate(invoice.date) }}</td>
                <td class="p-3 flex gap-2">
                  <button
                    v-if="invoice.status !== 'Paid'"
                    class="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs"
                    @click="sendReminder(invoice)"
                  >
                    Send Reminder
                  </button>
                  <button
                    class="px-3 py-1 border border-gray-200 text-gray-600 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-xs"
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
import { ref } from 'vue'
import { format } from 'date-fns'


// Template state
const template = ref({
  name: '',
  appId: '',
  paymentMethods: [],
  header: 'Sematica Solutions',
  footer: 'Thank you for your business!',
  color: '#2563EB',
})

// New invoice form
const newInvoice = ref({
  templateId: '',
  customerName: '',
  customerContact: '',
  amount: null,
})

// Dummy apps (instead of pulling from Firestore)
const apps = ref([
  { id: 'app1', name: 'E-commerce Store', paymentMethods: ['M-Pesa STK Push', 'Card Payments'] },
  { id: 'app2', name: 'Restaurant App', paymentMethods: ['M-Pesa Paybill', 'Card Payments'] },
  { id: 'app3', name: 'Service Booking', paymentMethods: ['M-Pesa STK Push'] },
])

// Available payment methods
const availablePaymentMethods = ['M-Pesa STK Push', 'M-Pesa Paybill', 'Card Payments']

// Templates (local)
const templates = ref([
  {
    id: 'template1',
    name: 'Default Invoice Template',
    appId: 'app1',
    paymentMethods: ['M-Pesa STK Push'],
    header: 'Sematica Solutions',
    footer: 'Thank you for your business!',
    color: '#2563EB',
    createdAt: new Date(),
  },
])

// Invoices (dummy data)
const invoices = ref([
  { id: 'INV001', customerName: 'Alice Johnson', customerContact: 'alice@example.com', amount: 12500, status: 'Paid', date: new Date('2025-08-01'), templateId: 'template1', paymentMethod: 'M-Pesa STK Push' },
  { id: 'INV002', customerName: 'Brian Kim', customerContact: '254723696767', amount: 8500, status: 'Unpaid', date: new Date('2025-08-05'), templateId: 'template1', paymentMethod: 'Card Payments' },
  { id: 'INV003', customerName: 'Carlos Lopez', customerContact: 'carlos@example.com', amount: 19200, status: 'Pending', date: new Date('2025-08-10'), templateId: 'template1', paymentMethod: 'M-Pesa Paybill' },
])

// Get payment methods for selected app
const getAppPaymentMethods = (appId) => {
  const app = apps.value.find(a => a.id === appId)
  return app ? app.paymentMethods : []
}

// Save template (local push)
const saveTemplate = () => {
  const templateData = {
    id: `template${Math.floor(1000 + Math.random() * 9000)}`,
    ...template.value,
    createdAt: new Date(),
  }
  templates.value.push(templateData)
  alert(`Template "${template.value.name}" saved!`)
  template.value = { name: '', appId: '', paymentMethods: [], header: 'Sematica Solutions', footer: 'Thank you for your business!', color: '#2563EB' }
}

// Generate invoice (local push)
const generateInvoice = () => {
  const selectedTemplate = templates.value.find(t => t.id === newInvoice.value.templateId)
  if (!selectedTemplate) {
    alert('Template not found')
    return
  }

  const invoice = {
    id: `INV${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: newInvoice.value.customerName,
    customerContact: newInvoice.value.customerContact,
    amount: newInvoice.value.amount,
    status: 'Pending',
    date: new Date(),
    templateId: newInvoice.value.templateId,
    appId: selectedTemplate.appId,
    paymentMethod: selectedTemplate.paymentMethods[0], // Use first available method
  }

  invoices.value.push(invoice)

  // Simulate payment initiation
  if (invoice.paymentMethod === 'M-Pesa STK Push') {
    alert(`M-Pesa STK Push sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  } else if (invoice.paymentMethod === 'M-Pesa Paybill') {
    alert(`Paybill instructions sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  } else if (invoice.paymentMethod === 'Card Payments') {
    alert(`Card payment link sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  }

  newInvoice.value = { templateId: '', customerName: '', customerContact: '', amount: null }
}

// Send reminder
const sendReminder = (invoice) => {
  if (invoice.paymentMethod === 'M-Pesa STK Push') {
    alert(`Reminder: M-Pesa STK Push sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  } else if (invoice.paymentMethod === 'M-Pesa Paybill') {
    alert(`Reminder: Paybill instructions sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  } else if (invoice.paymentMethod === 'Card Payments') {
    alert(`Reminder: Card payment link sent to ${invoice.customerContact} for KES ${invoice.amount}`)
  }

  if (invoice.status !== 'Unpaid') {
    invoice.status = 'Unpaid'
  }
}

// View receipt
const viewReceipt = (invoice) => {
  const selectedTemplate = templates.value.find(t => t.id === invoice.templateId) || template.value
  const receipt = `
    Invoice #${invoice.id}
    Customer: ${invoice.customerName}
    Contact: ${invoice.customerContact}
    Amount: KES ${invoice.amount.toLocaleString()}
    Status: ${invoice.status}
    Date: ${formatDate(invoice.date)}
    Header: ${selectedTemplate.header}
    Footer: ${selectedTemplate.footer}
    Payment Method: ${invoice.paymentMethod || 'N/A'}
  `
  alert(receipt)
}

// Format date
const formatDate = (date) => format(new Date(date), 'MMM dd, yyyy')
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

table {
  min-width: 100%;
}

tr {
  transition: background-color 0.2s ease;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>