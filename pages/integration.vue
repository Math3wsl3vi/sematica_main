<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
    <!-- Hero Section -->
    <section class="py-16">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
          Perfect for <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Every Industry</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-delay-200">
          From restaurants to e-commerce, see how Sematicca transforms businesses across Kenya with intelligent automation and seamless customer experiences.
        </p>
        
        <!-- Search and Filter -->
        <div class="max-w-2xl mx-auto mb-12 animate-fade-in-delay-400">
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search industries..." 
              class="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/90"
            >
            <i class="fas fa-search absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400"/>
          </div>
          
          <!-- Filter Tags -->
          <div class="flex flex-wrap justify-center gap-3 mt-6">
            <button
              v-for="tag in filterTags"
              :key="tag"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                activeFilter === tag
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-600 hover:bg-white/90 hover:text-blue-600'
              ]"
              @click="activeFilter = activeFilter === tag ? '' : tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Grid -->
    <section class="pb-20">
      <div class="container mx-auto px-6">
        <TransitionGroup
          name="industry-card"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="(industry, index) in filteredIndustries"
            :key="industry.id"
            class="industry-card bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            :style="{ animationDelay: `${index * 100}ms` }"
            @click="selectIndustry(industry)"
          >
            <div 
              :class="[
                'p-6 text-white relative',
                industry.gradient
              ]"
            >
              <i :class="[industry.icon, 'text-3xl mb-4']"/>
              <h3 class="text-2xl font-bold mb-2">{{ industry.name }}</h3>
              <p class="text-white/90 mb-4">{{ industry.description }}</p>
              <i class="fas fa-arrow-right absolute top-6 right-6 transition-transform group-hover:translate-x-1"/>
            </div>
            
            <div class="p-6">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm text-gray-600">Success Story</span>
                <span class="text-green-600 font-bold animate-pulse">{{ industry.successMetric }}</span>
              </div>
              
              <ul class="space-y-2">
                <li 
                  v-for="feature in industry.features"
                  :key="feature"
                  class="flex items-center text-sm text-gray-700"
                >
                  <i class="fas fa-check text-green-500 mr-3"/>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </TransitionGroup>

        <!-- No Results -->
        <div 
          v-if="filteredIndustries.length === 0"
          class="text-center py-20"
        >
          <i class="fas fa-search text-6xl text-gray-300 mb-4"/>
          <h3 class="text-2xl font-semibold text-gray-600 mb-2">No industries found</h3>
          <p class="text-gray-500">Try adjusting your search or filter criteria</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of businesses across Kenya that are already using Sematicca to automate their customer interactions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/get-started"
            class="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Start Building Now
          </NuxtLink>
          <NuxtLink
            to="/demo"
            class="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            Request Demo
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Industry Selection Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedIndustry"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        @click.self="selectedIndustry = null"
      >
        <div class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden animate-modal-in">
          <div :class="['p-8 text-white', selectedIndustry.gradient]">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-3xl font-bold">{{ selectedIndustry.name }}</h3>
              <button 
                class="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                @click="selectedIndustry = null"
              >
                <i class="fas fa-times"/>
              </button>
            </div>
            <p class="text-white/90 text-lg">{{ selectedIndustry.description }}</p>
          </div>
          
          <div class="p-8">
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-gray-800 mb-2">{{ selectedIndustry.templates }}</div>
                <div class="text-gray-600">Ready Templates</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">{{ selectedIndustry.successMetric }}</div>
                <div class="text-gray-600">Average Improvement</div>
              </div>
            </div>
            
            <h4 class="text-xl font-semibold text-gray-800 mb-4">What you'll get:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div 
                v-for="feature in selectedIndustry.features"
                :key="feature"
                class="flex items-center p-3 rounded-xl bg-gray-50"
              >
                <i class="fas fa-check text-green-500 mr-3"/>
                <span class="text-gray-700">{{ feature }}</span>
              </div>
            </div>
            
            <div class="flex gap-4">
              <button
                class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                @click="buildTemplate(selectedIndustry)"
              >
                Build Template
              </button>
              <button
                class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                @click="previewTemplate(selectedIndustry)"
              >
                Preview
              </button> 
            </div>
          </div>
        </div>
      </div>
    </Teleport>
     <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppFooter from '@/components/AppFooter.vue'

// Page meta
definePageMeta({
  title: 'Perfect for Every Industry - Sematicca',
  description: 'Discover how Sematicca transforms businesses across Kenya with intelligent automation tailored for every industry.'
})

// Reactive data
const searchQuery = ref('')
const activeFilter = ref('')
const selectedIndustry = ref(null)

// Filter tags
const filterTags = ref([
  'All', 'Popular', 'Service', 'Commerce', 'Technology', 'Healthcare', 'Finance'
])

// Industries data
const industries = ref([
  {
    id: 'restaurants',
    name: 'Restaurants',
    description: 'Voice ordering, menu management, delivery coordination',
    category: 'Service',
    icon: 'fas fa-utensils',
    gradient: 'bg-gradient-to-br from-orange-500 to-red-500',
    successMetric: '+40% orders',
    templates: '12',
    features: ['Voice menu reading', 'Order processing', 'Delivery tracking', 'Customer feedback', 'Table reservations', 'Loyalty programs']
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    description: 'Product catalogs, order management, customer support',
    category: 'Commerce',
    icon: 'fas fa-shopping-cart',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
    successMetric: '+60% conversion',
    templates: '15',
    features: ['Product browsing', 'Cart management', 'Payment processing', 'Order status', 'Returns handling', 'Wishlist management']
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Appointment booking, patient reminders, consultations',
    category: 'Healthcare',
    icon: 'fas fa-heart',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-500',
    successMetric: '+35% efficiency',
    templates: '18',
    features: ['Appointment scheduling', 'Reminder system', 'Medical history', 'Prescription tracking', 'Telemedicine', 'Emergency contacts']
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'Package tracking, delivery updates, route optimization',
    category: 'Service',
    icon: 'fas fa-truck',
    gradient: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    successMetric: '+50% satisfaction',
    templates: '10',
    features: ['Real-time tracking', 'Delivery notifications', 'Route planning', 'Customer updates', 'Proof of delivery', 'Scheduling pickups']
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Student enrollment, class schedules, fee management',
    category: 'Service',
    icon: 'fas fa-graduation-cap',
    gradient: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    successMetric: '+45% engagement',
    templates: '14',
    features: ['Course registration', 'Schedule management', 'Fee collection', 'Progress tracking', 'Assignment reminders', 'Parent communication']
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Client booking, project management, billing',
    category: 'Service',
    icon: 'fas fa-briefcase',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500',
    successMetric: '+30% productivity',
    templates: '11',
    features: ['Client onboarding', 'Project tracking', 'Time logging', 'Invoice generation', 'Document sharing', 'Meeting scheduling']
  },
  {
    id: 'banking',
    name: 'Banking & Finance',
    description: 'Account inquiries, loan applications, transaction support',
    category: 'Finance',
    icon: 'fas fa-university',
    gradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    successMetric: '+65% efficiency',
    templates: '16',
    features: ['Balance inquiries', 'Loan processing', 'Transaction history', 'Customer support', 'Mobile banking', 'Investment advice']
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property listings, viewings, client management',
    category: 'Service',
    icon: 'fas fa-home',
    gradient: 'bg-gradient-to-br from-emerald-500 to-green-600',
    successMetric: '+55% leads',
    templates: '13',
    features: ['Property search', 'Viewing scheduling', 'Document sharing', 'Lead qualification', 'Market analysis', 'Contract management']
  },
  {
    id: 'travel',
    name: 'Travel & Tourism',
    description: 'Booking assistance, itinerary planning, support',
    category: 'Service',
    icon: 'fas fa-plane',
    gradient: 'bg-gradient-to-br from-amber-500 to-orange-600',
    successMetric: '+42% bookings',
    templates: '12',
    features: ['Flight bookings', 'Hotel reservations', 'Trip planning', 'Travel updates', 'Visa assistance', 'Local recommendations']
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Service booking, parts inquiry, maintenance reminders',
    category: 'Service',
    icon: 'fas fa-car',
    gradient: 'bg-gradient-to-br from-red-500 to-pink-600',
    successMetric: '+38% retention',
    templates: '9',
    features: ['Service appointments', 'Parts catalog', 'Maintenance alerts', 'Warranty tracking', 'Roadside assistance', 'Vehicle history']
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Inventory check, customer service, promotions',
    category: 'Commerce',
    icon: 'fas fa-store',
    gradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
    successMetric: '+48% sales',
    templates: '14',
    features: ['Product availability', 'Store locator', 'Loyalty programs', 'Return processing', 'Size guide', 'Personal shopper']
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Claims processing, policy inquiries, renewals',
    category: 'Finance',
    icon: 'fas fa-shield-alt',
    gradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
    successMetric: '+52% claims speed',
    templates: '11',
    features: ['Claim submissions', 'Policy management', 'Premium calculations', 'Renewal reminders', 'Risk assessment', 'Document upload']
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Crop management, market prices, weather updates',
    category: 'Technology',
    icon: 'fas fa-seedling',
    gradient: 'bg-gradient-to-br from-lime-500 to-green-600',
    successMetric: '+33% yield',
    templates: '8',
    features: ['Weather alerts', 'Market prices', 'Crop advisory', 'Supply chain', 'Pest management', 'Irrigation scheduling']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Production tracking, quality control, inventory',
    category: 'Technology',
    icon: 'fas fa-industry',
    gradient: 'bg-gradient-to-br from-slate-500 to-gray-600',
    successMetric: '+44% efficiency',
    templates: '10',
    features: ['Production status', 'Quality reports', 'Inventory alerts', 'Maintenance schedule', 'Supply tracking', 'Safety compliance']
  },
  {
    id: 'telecom',
    name: 'Telecommunications',
    description: 'Plan management, billing support, technical help',
    category: 'Technology',
    icon: 'fas fa-signal',
    gradient: 'bg-gradient-to-br from-sky-500 to-indigo-600',
    successMetric: '+58% satisfaction',
    templates: '13',
    features: ['Plan upgrades', 'Bill inquiries', 'Technical support', 'Data usage', 'Network status', 'Device troubleshooting']
  }
])

// Computed properties
const filteredIndustries = computed(() => {
  let filtered = industries.value

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(industry => 
      industry.name.toLowerCase().includes(query) ||
      industry.description.toLowerCase().includes(query) ||
      industry.category.toLowerCase().includes(query)
    )
  }

  // Filter by active filter
  if (activeFilter.value && activeFilter.value !== 'All') {
    if (activeFilter.value === 'Popular') {
      filtered = filtered.filter(industry => 
        ['restaurants', 'ecommerce', 'healthcare', 'banking'].includes(industry.id)
      )
    } else {
      filtered = filtered.filter(industry => industry.category === activeFilter.value)
    }
  }

  return filtered
})

// Methods
const selectIndustry = (industry) => {
  selectedIndustry.value = industry
}

const buildTemplate = (industry) => {
  // Navigate to assistant builder with industry context
  navigateTo(`/assistant-builder?industry=${industry.id}`)
}

const previewTemplate = (industry) => {
  // Navigate to preview page
  navigateTo(`/templates/preview/${industry.id}`)
}

// Animation classes
// const fadeInClasses = {
//   'animate-fade-in': 'animation: fadeIn 0.6s ease-out forwards; opacity: 0;',
//   'animate-fade-in-delay-200': 'animation: fadeIn 0.6s ease-out 0.2s forwards; opacity: 0;',
//   'animate-fade-in-delay-400': 'animation: fadeIn 0.6s ease-out 0.4s forwards; opacity: 0;',
// }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.font-inter {
  font-family: 'Inter', sans-serif;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-delay-200 {
  animation: fadeIn 0.6s ease-out 0.2s forwards;
  opacity: 0;
}

.animate-fade-in-delay-400 {
  animation: fadeIn 0.6s ease-out 0.4s forwards;
  opacity: 0;
}

@keyframes modalIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-modal-in {
  animation: modalIn 0.3s ease-out forwards;
}

/* Transition animations for industry cards */
.industry-card-enter-active,
.industry-card-leave-active {
  transition: all 0.5s ease;
}

.industry-card-enter-from,
.industry-card-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.industry-card-move {
  transition: transform 0.5s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Hover effects */
.industry-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.industry-card:hover {
  transform: translateY(-8px);
}
</style>