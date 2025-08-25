<template>
  <div class="min-h-screen bg-gray-50 font-inter">
    <section class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div class="container mx-auto px-6 text-center">
    <div class="animate-fade-in">
      <span class="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
        💳 Smart Payment Infrastructure
      </span>
      <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
        Powering
        <span class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Secure Transactions
        </span>
        for Every Business
      </h1>
      <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Seamlessly integrate M-Pesa, Card Payments, Bank Transfers, and more. 
        One platform for reliable, scalable, and secure financial operations.
      </p>
    </div>
  </div>
</section>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-blue-100 rounded-lg">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Active Apps</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.activeApps }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-green-100 rounded-lg">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Integrations</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.integrations }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-yellow-100 rounded-lg">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">This Month</p>
              <p class="text-2xl font-semibold text-gray-900">KES {{ stats.monthlyVolume.toLocaleString() }}</p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <div class="flex items-center">
            <div class="p-2 bg-purple-100 rounded-lg">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-600">Success Rate</p>
              <p class="text-2xl font-semibold text-gray-900">{{ stats.successRate }}%</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Payment Solutions Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- M-Pesa STK Push -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">M-Pesa STK Push</h3>
                  <p class="text-sm text-gray-600">Automatic payment prompts</p>
                </div>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <p class="text-gray-600 mb-6">
              Automatically prompt customers to pay via M-Pesa on their phones. Seamless integration with instant confirmation.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Real-time payment notifications
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Automatic reconciliation
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Webhook support
              </div>
            </div>
            <div class="flex space-x-3">
              <button
                class="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                @click="configureIntegration('mpesa-stk')"
              >
                Configure
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                @click="viewDocs('mpesa-stk')"
              >
                View Docs
              </button>
            </div>
          </div>
        </div>
        <!-- M-Pesa Paybill/Till -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">M-Pesa Paybill & Till</h3>
                  <p class="text-sm text-gray-600">Business number integration</p>
                </div>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Available
              </span>
            </div>
            <p class="text-gray-600 mb-6">
              Connect your existing M-Pesa Paybill or Till number to accept payments directly into your business account.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Use existing business numbers
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Payment verification
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Transaction tracking
              </div>
            </div>
            <div class="flex space-x-3">
              <button
                class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                @click="configureIntegration('mpesa-paybill')"
              >
                Configure
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                @click="viewDocs('mpesa-paybill')"
              >
                View Docs
              </button>
            </div>
          </div>
        </div>
        <!-- Card Payments -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                </div>
                <div class="ml-3">
                  <h3 class="text-lg font-semibold text-gray-900">Card Payments</h3>
                  <p class="text-sm text-gray-600">Visa, Mastercard support</p>
                </div>
              </div>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Setup Required
              </span>
            </div>
            <p class="text-gray-600 mb-6">
              Accept international and local card payments with secure processing and fraud protection.
            </p>
            <div class="space-y-3 mb-6">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                PCI DSS compliant
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                3D Secure authentication
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Multi-currency support
              </div>
            </div>
            <div class="flex space-x-3">
              <button
                class="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium"
                @click="configureIntegration('card-payments')"
              >
                Configure
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                @click="viewDocs('card-payments')"
              >
                View Docs
              </button>
            </div>
          </div>
        </div>
        <!-- Bank Transfers -->
<div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
  <div class="p-6">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <div class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
          <!-- Stripe Icon (credit card style) -->
          <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M2 7h20M2 11h20M6 15h2m4 0h6M2 19h20" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-semibold text-gray-900">Stripe Payments</h3>
          <p class="text-sm text-gray-600">Global online transactions</p>
        </div>
      </div>
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
        Live
      </span>
    </div>

    <p class="text-gray-600 mb-6">
      Accept card payments, digital wallets, and recurring subscriptions with Stripe’s secure and scalable infrastructure.
    </p>

    <!-- Features -->
    <div class="space-y-3 mb-6">
      <div class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        Credit & Debit Cards
      </div>
      <div class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        Apple Pay & Google Pay
      </div>
      <div class="flex items-center text-sm text-gray-600">
        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd" />
        </svg>
        Subscription Billing
      </div>
    </div>

    <!-- Actions -->
    <div class="flex space-x-3">
      <button
        class="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        @click="viewDocs('stripe')"
      >
        Get Started
      </button>
      <button
        class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        @click="viewDocs('stripe')"
      >
        Learn More
      </button>
    </div>
  </div>
</div>

      </div>
      <!-- Integration Status -->
      <div class="mt-8 bg-white rounded-xl shadow-lg p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-gray-900">Your App Integrations</h2>
          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            @click="showCreateApp = true"
          >
            + Add New App
          </button>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">App Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Methods</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="app in apps" :key="app.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                      </svg>
                    </div>
                    <div>
                      <div class="text-sm font-medium text-gray-900">{{ app.name }}</div>
                      <div class="text-sm text-gray-500">{{ app.description }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="method in app.paymentMethods"
                      :key="method"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                      :class="getPaymentMethodColor(method)"
                    >
                      {{ method }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="app.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'"
                    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  >
                    {{ app.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatDate(app.lastUpdated) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button class="text-blue-600 hover:text-blue-900 mr-4" @click="manageApp(app.id)">Manage</button>
                  <button class="text-gray-600 hover:text-gray-900" @click="viewKeys(app.id)">API Keys</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Configuration Modal -->
      <div v-if="showConfigModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
          <div class="mt-3">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">Configure {{ selectedIntegration?.title }}</h3>
              <button class="text-gray-400 hover:text-gray-600" @click="showConfigModal = false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Select App</label>
                <select
                  v-model="configForm.appId"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                >
                  <option v-for="app in apps" :key="app.id" :value="app.id">{{ app.name }}</option>
                </select>
              </div>
              <div v-if="selectedIntegration?.id === 'mpesa-stk'">
                <label class="block text-sm font-medium text-gray-700 mb-2">Consumer Key</label>
                <input
                  v-model="configForm.consumerKey"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter M-Pesa Consumer Key"
                >
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">Consumer Secret</label>
                <input
                  v-model="configForm.consumerSecret"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter M-Pesa Consumer Secret"
                >
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">Shortcode</label>
                <input
                  v-model="configForm.shortcode"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter M-Pesa Shortcode"
                >
              </div>
              <div v-if="selectedIntegration?.id === 'mpesa-paybill'">
                <label class="block text-sm font-medium text-gray-700 mb-2">Paybill Number</label>
                <input
                  v-model="configForm.paybillNumber"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Paybill Number"
                >
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">Account Number</label>
                <input
                  v-model="configForm.accountNumber"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Account Number (optional)"
                >
              </div>
              <div v-if="selectedIntegration?.id === 'card-payments'">
                <label class="block text-sm font-medium text-gray-700 mb-2">Stripe API Key</label>
                <input
                  v-model="configForm.stripeApiKey"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Stripe API Key"
                >
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">Webhook Secret</label>
                <input
                  v-model="configForm.webhookSecret"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter Webhook Secret"
                >
              </div>
            </div>
            <div class="mt-6 flex space-x-3">
              <button
                class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                :disabled="!configForm.appId"
                @click="saveConfiguration"
              >
                Save Configuration
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                @click="showConfigModal = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Create App Modal -->
      <div v-if="showCreateApp" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div class="relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white">
          <div class="mt-3">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">Add New App</h3>
              <button class="text-gray-400 hover:text-gray-600" @click="showCreateApp = false">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">App Name</label>
                <input
                  v-model="newApp.name"
                  type="text"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter App Name"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  v-model="newApp.description"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter App Description"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Payment Methods</label>
                <div class="flex flex-wrap gap-2">
                  <label v-for="method in availablePaymentMethods" :key="method" class="flex items-center">
                    <input
                      v-model="newApp.paymentMethods"
                      type="checkbox"
                      :value="method"
                      class="mr-2"
                    >
                    {{ method }}
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-6 flex space-x-3">
              <button
                class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                :disabled="!newApp.name || !newApp.paymentMethods.length"
                @click="createApp"
              >
                Create App
              </button>
              <button
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                @click="showCreateApp = false"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { format } from 'date-fns';

// Dashboard stats (dummy)
const stats = ref({
  activeApps: 5,
  integrations: 12,
  monthlyVolume: 1250000,
  successRate: 98,
});

// Apps list (dummy data only)
const apps = ref([
  {
    id: 'app1',
    name: 'E-commerce Store',
    description: 'Online retail platform',
    paymentMethods: ['M-Pesa STK Push', 'Card Payments'],
    status: 'Active',
    lastUpdated: new Date('2025-08-20'),
  },
  {
    id: 'app2',
    name: 'Restaurant App',
    description: 'Food ordering system',
    paymentMethods: ['M-Pesa Paybill', 'Card Payments'],
    status: 'Pending',
    lastUpdated: new Date('2025-08-21'),
  },
  {
    id: 'app3',
    name: 'Service Booking',
    description: 'Appointment scheduling',
    paymentMethods: ['M-Pesa STK Push'],
    status: 'Active',
    lastUpdated: new Date('2025-08-22'),
  },
]);

const availablePaymentMethods = ['M-Pesa STK Push', 'M-Pesa Paybill', 'Card Payments'];

const showConfigModal = ref(false);
const showCreateApp = ref(false);
const selectedIntegration = ref(null);
const configForm = ref({
  appId: '',
  consumerKey: '',
  consumerSecret: '',
  shortcode: '',
  paybillNumber: '',
  accountNumber: '',
  stripeApiKey: '',
  webhookSecret: '',
});

const newApp = ref({
  name: '',
  description: '',
  paymentMethods: [],
});

// Payment method color mapping
const getPaymentMethodColor = (method) => {
  return {
    'M-Pesa STK Push': 'bg-green-100 text-green-800',
    'M-Pesa Paybill': 'bg-blue-100 text-blue-800',
    'Card Payments': 'bg-purple-100 text-purple-800',
  }[method] || 'bg-gray-100 text-gray-800';
};

// Integration configurations
const integrations = [
  { id: 'mpesa-stk', title: 'M-Pesa STK Push' },
  { id: 'mpesa-paybill', title: 'M-Pesa Paybill & Till' },
  { id: 'card-payments', title: 'Card Payments' },
  { id: 'bank-transfers', title: 'Bank Transfers' },
];

// Configure integration (dummy)
const configureIntegration = (integrationId) => {
  selectedIntegration.value = integrations.find(i => i.id === integrationId);
  configForm.value = {
    appId: '',
    consumerKey: '',
    consumerSecret: '',
    shortcode: '',
    paybillNumber: '',
    accountNumber: '',
    stripeApiKey: '',
    webhookSecret: '',
  };
  showConfigModal.value = true;
};

// Save configuration (dummy only, no Firestore)
const saveConfiguration = () => {
  try {
    const app = apps.value.find(a => a.id === configForm.value.appId);
    if (!app) throw new Error('App not found');

    if (!app.paymentMethods.includes(selectedIntegration.value.title)) {
      app.paymentMethods.push(selectedIntegration.value.title);
    }

    alert(`Configuration for ${selectedIntegration.value.title} saved successfully!`);
    showConfigModal.value = false;
  } catch (error) {
    console.error('Error saving configuration:', error);
    alert('Failed to save configuration.');
  }
};

// Create new app (dummy only)
const createApp = () => {
  const appData = {
    id: `app${Math.floor(1000 + Math.random() * 9000)}`,
    name: newApp.value.name,
    description: newApp.value.description,
    paymentMethods: newApp.value.paymentMethods,
    status: 'Pending',
    lastUpdated: new Date(),
  };
  apps.value.push(appData);
  newApp.value = { name: '', description: '', paymentMethods: [] };
  showCreateApp.value = false;
  alert('App created successfully!');
};

// View documentation
const viewDocs = (integrationId) => {
  const urls = {
    'mpesa-stk': 'https://developers.safaricom.co.ke/docs/stk-push',
    'mpesa-paybill': 'https://developers.safaricom.co.ke/docs/paybill',
    'card-payments': 'https://stripe.com/docs',
    'bank-transfers': 'https://example.com/bank-transfers',
  };
  window.open(urls[integrationId] || 'https://example.com/docs', '_blank');
};

// Manage app
const manageApp = (appId) => {
  navigateTo(`/apps/${appId}`);
};

// View API keys
const viewKeys = (appId) => {
  navigateTo(`/apps/${appId}/keys`);
};

// Format date
const formatDate = (date) => {
  try {
    return format(new Date(date), 'MMM dd, yyyy');
  } catch {
    return 'Invalid Date';
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>