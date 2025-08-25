<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-inter">

    <div class="container mx-auto px-4 md:px-6 py-8">
      <!-- Hero Section -->
      <section class="py-12 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Real-Time <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Analytics Dashboard</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Track conversations, revenue, and channel performance in one place. Stay on top of your customer engagement and business growth with live data.
        </p>
        
        <div class="flex flex-col items-center">
          <p class="mb-6 text-sm md:text-base text-gray-500">
            Trusted by <span class="font-semibold text-gray-700">500+ businesses</span> in Kenya
          </p>

          <div class="flex flex-wrap justify-center gap-3 md:gap-6">
            <div
                     v-for="(company, index) in companies" :key="index" 
                 class="px-5 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <span class="text-sm md:text-base font-medium text-gray-700">{{ company }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Dashboard Content -->
      <main class="space-y-8">
        <!-- Key Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div 
            v-for="(metric, index) in metrics" 
            :key="metric.title"
            :class="[
              'bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-gray-100',
              'hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
              'group cursor-pointer'
            ]"
            :style="{ animationDelay: `${index * 100}ms` }"
            class="animate-fade-in"
          >
            <div class="flex items-center justify-between mb-4">
              <div
:class="[
                'w-12 h-12 rounded-xl flex items-center justify-center',
                'bg-gradient-to-br group-hover:scale-110 transition-transform duration-300',
                metric.gradient
              ]">
                <i :class="[metric.icon, 'text-white text-lg']"/>
              </div>
              <div
:class="[
                'px-2.5 py-1 rounded-full text-xs font-semibold',
                metric.trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              ]">
                <i :class="metric.trend > 0 ? 'fas fa-arrow-up' : 'fas fa-arrow-down'"/>
                {{ Math.abs(metric.trend) }}%
              </div>
            </div>
            <h3 class="text-sm text-gray-500 mb-2">{{ metric.title }}</h3>
            <p class="text-2xl font-bold text-gray-800 mb-1">{{ metric.value }}</p>
            <p class="text-xs text-gray-400">{{ metric.subtitle }}</p>
          </div>
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <!-- Main Chart -->
          <div class="xl:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h2 class="text-xl font-semibold text-gray-800">Analytics Overview</h2>
              <div class="flex bg-gray-100 rounded-lg p-1 w-fit">
                <button 
                  v-for="period in chartPeriods"
                  :key="period"
                  :class="[
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                    selectedPeriod === period 
                      ? 'bg-white shadow-sm text-blue-600' 
                      : 'text-gray-600 hover:text-gray-800'
                  ]"
                  @click="selectedPeriod = period"
                >
                  {{ period }}
                </button>
              </div>
            </div>
            <div class="relative">
              <canvas id="mainChart" class="h-80"/>
            </div>
          </div>

          <!-- Side Stats -->
          <div class="space-y-6">
            <!-- Channel Performance -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">Channel Performance</h3>
              <div class="space-y-4">
                <div v-for="channel in channels" :key="channel.name" class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div :class="['w-3 h-3 rounded-full mr-3', channel.color]"/>
                    <span class="text-sm font-medium text-gray-700">{{ channel.name }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-sm font-bold text-gray-800">{{ channel.value }}</span>
                    <div class="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        :class="['h-full rounded-full transition-all duration-1000', channel.color]"
                        :style="{ width: `${channel.percentage}%` }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <h3 class="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div class="space-y-3">
                <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start gap-3">
                  <div :class="['w-2 h-2 rounded-full mt-2 flex-shrink-0', activity.color]"/>
                  <div class="min-w-0">
                    <p class="text-sm text-gray-800 truncate">{{ activity.text }}</p>
                    <p class="text-xs text-gray-500">{{ activity.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions Grid -->
        <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">Quick Actions</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <NuxtLink
              v-for="action in quickActions"
              :key="action.title"
              :to="action.path"
              :class="[
                'group flex flex-col items-center justify-center p-5 rounded-xl',
                'hover:shadow-lg transition-all duration-300 hover:-translate-y-1',
                'border border-gray-200 hover:border-transparent',
                action.bgClass, action.hoverClass
              ]"
            >
              <div
:class="[
                'w-12 h-12 rounded-xl mb-4 flex items-center justify-center',
                'group-hover:scale-110 transition-transform bg-white shadow-sm'
              ]">
                <i :class="[action.icon, 'text-xl', action.iconColor]"/>
              </div>
              <h3 class="font-semibold text-gray-800 text-center mb-2">{{ action.title }}</h3>
              <p class="text-xs text-gray-500 text-center">{{ action.description }}</p>
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

// Reactive state
const selectedPeriod = ref('7D');
const currentTime = ref('');
const currentDate = ref('');
const companies = ref(['TechCorp', 'GrowthCo', 'Xvideos', 'SmartBiz', 'MarketLead', 'NexusKE']);

// Metrics data
const metrics = ref([
  {
    title: 'Total Conversations',
    value: '1,254',
    subtitle: 'This month',
    trend: 12,
    icon: 'fas fa-comments',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Revenue',
    value: 'KES 128.5K',
    subtitle: 'This month',
    trend: 8,
    icon: 'fas fa-chart-line',
    gradient: 'from-green-500 to-green-600'
  },
  {
    title: 'Active Channels',
    value: '5',
    subtitle: 'Connected',
    trend: 25,
    icon: 'fas fa-broadcast-tower',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Response Rate',
    value: '98.5%',
    subtitle: 'Average',
    trend: 3,
    icon: 'fas fa-clock',
    gradient: 'from-orange-500 to-orange-600'
  }
]);

// Chart periods
const chartPeriods = ref(['24H', '7D', '30D', '90D']);

// Channel data
const channels = ref([
  { name: 'WhatsApp', value: '45%', percentage: 45, color: 'bg-green-500' },
  { name: 'Web Chat', value: '32%', percentage: 32, color: 'bg-blue-500' },
  { name: 'Instagram', value: '18%', percentage: 18, color: 'bg-pink-500' },
  { name: 'Telegram', value: '5%', percentage: 5, color: 'bg-cyan-500' }
]);

// Recent activity
const recentActivity = ref([
  { id: 1, text: 'New customer inquiry via WhatsApp', time: '2 minutes ago', color: 'bg-green-500' },
  { id: 2, text: 'Product catalog updated', time: '15 minutes ago', color: 'bg-blue-500' },
  { id: 3, text: 'Integration with Instagram completed', time: '1 hour ago', color: 'bg-purple-500' },
  { id: 4, text: 'Weekly report generated', time: '2 hours ago', color: 'bg-orange-500' }
]);

// Quick actions
const quickActions = ref([
  {
    title: 'Create Flow',
    description: 'Build a new conversation flow',
    path: '/assistant-builder',
    icon: 'fas fa-plus-circle',
    iconColor: 'text-blue-600',
    bgClass: 'hover:bg-blue-50',
    hoverClass: 'hover:border-blue-200'
  },
  {
    title: 'Add Product',
    description: 'Add new product to catalog',
    path: '/commerce/products',
    icon: 'fas fa-shopping-bag',
    iconColor: 'text-green-600',
    bgClass: 'hover:bg-green-50',
    hoverClass: 'hover:border-green-200'
  },
  {
    title: 'Connect Channel',
    description: 'Integrate new messaging platform',
    path: '/integrations',
    icon: 'fas fa-link',
    iconColor: 'text-purple-600',
    bgClass: 'hover:bg-purple-50',
    hoverClass: 'hover:border-purple-200'
  },
  {
    title: 'View Analytics',
    description: 'Detailed performance insights',
    path: '/analytics',
    icon: 'fas fa-chart-pie',
    iconColor: 'text-orange-600',
    bgClass: 'hover:bg-orange-50',
    hoverClass: 'hover:border-orange-200'
  }
]);

// Time update function
const updateTime = () => {
  const now = new Date();
  currentTime.value = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
  currentDate.value = now.toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Chart initialization
const initializeChart = () => {
  const ctx = document.getElementById('mainChart')?.getContext('2d');
  if (!ctx) return;

  const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient1.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
  gradient1.addColorStop(1, 'rgba(59, 130, 246, 0.05)');

  const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
  gradient2.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
  gradient2.addColorStop(1, 'rgba(16, 185, 129, 0.05)');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Conversations',
          data: [150, 200, 180, 220, 250, 230, 280],
          backgroundColor: gradient1,
          borderColor: 'rgba(59, 130, 246, 1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'rgba(59, 130, 246, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        },
        {
          label: 'Sales (KES 1000s)',
          data: [10, 15, 12, 18, 20, 17, 25],
          backgroundColor: gradient2,
          borderColor: 'rgba(16, 185, 129, 1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: 'rgba(16, 185, 129, 1)',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            usePointStyle: true,
            padding: 20,
            font: { size: 12, weight: '500' }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 12 } }
        },
        y: {
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { size: 12 } },
          beginAtZero: true
        }
      },
      interaction: {
        intersect: false,
        mode: 'index'
      }
    }
  });
};

// Lifecycle hooks
let timeInterval;

onMounted(() => {
  updateTime();
  timeInterval = setInterval(updateTime, 1000);
  setTimeout(initializeChart, 100);
});

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval);
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.font-inter {
  font-family: 'Inter', sans-serif;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
  opacity: 0;
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

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>