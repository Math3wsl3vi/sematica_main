<template>
  <div class="min-h-screen font-inter flex flex-col">
    <!-- Top Navigation -->
    <nav class="bg-blue-50 border border-blue-300 rounded-md p-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800">Omnichannel Dashboard</h1>
        <div class="flex gap-2">
          <button
            v-for="channel in channels"
            :key="channel.id"
            :class="[
              'flex items-center px-4 py-2 rounded-lg font-semibold transition-all',
              activeChannel === channel.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
            ]"
            @click="activeChannel = channel.id"
          >
            <i :class="[channel.icon, 'mr-2 text-lg']"/>
            {{ channel.name }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <!-- Header -->
      <header class="flex justify-between items-center mb-6">
        <h2 class="text-3xl font-bold text-gray-800">{{ activeChannelName }} Overview</h2>
        <div class="flex gap-4">
          <button
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            @click="startIntegration(activeChannel)"
          >
            <i class="fas fa-plug mr-2"/> Integrate
          </button>
          <button
            class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
            @click="viewAnalytics(activeChannel)"
          >
            <i class="fas fa-chart-line mr-2"/> Analytics
          </button>
        </div>
      </header>

      <!-- Metrics Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          v-for="stat in activeChannelStats"
          :key="stat.label"
          class="bg-white rounded-xl p-6 shadow-sm"
        >
          <h3 class="text-sm font-semibold text-gray-600">{{ stat.label }}</h3>
          <div class="text-2xl font-bold text-gray-800">{{ stat.value }}</div>
          <div class="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div
              class="h-full rounded-full transition-all duration-500"
              :style="`width: ${stat.percentage}%; background: ${activeChannelGradient}`"
            />
          </div>
        </div>
      </div>

      <!-- Channel Controls -->
      <section class="bg-white rounded-xl p-6 shadow-sm mb-8">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Channel Controls</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="feature in activeChannelFeatures"
            :key="feature.title"
            class="flex items-center p-4 bg-gray-50 rounded-lg"
          >
            <div
              class="w-10 h-10 rounded-lg flex items-center justify-center mr-4"
              :style="`background: linear-gradient(135deg, ${activeChannelColor}20, ${activeChannelColor}10)`"
            >
              <i :class="[feature.icon, 'text-lg']" :style="`color: ${activeChannelColor}`"/>
            </div>
            <div>
              <h4 class="font-semibold text-gray-800">{{ feature.title }}</h4>
              <p class="text-sm text-gray-600">{{ feature.description }}</p>
            </div>
            <button
              class="ml-auto px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              @click="manageFeature(feature)"
            >
              Manage
            </button>
          </div>
        </div>
      </section>

      <!-- Recent Activity -->
      <section class="bg-white rounded-xl p-6 shadow-sm">
        <h3 class="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
        <div class="space-y-4">
          <div
            v-for="(activity, index) in recentActivities"
            :key="index"
            class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div class="flex items-center">
              <i :class="[activity.icon, 'text-lg mr-3']" :style="`color: ${activeChannelColor}`"/>
              <span class="text-gray-600">{{ activity.description }}</span>
            </div>
            <span class="text-sm text-gray-500">{{ activity.time }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Reactive data
const activeChannel = ref('whatsapp');

// Channels data (retained from original, trimmed for brevity)
const channels = ref([
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'Manage customer support, sales, and notifications.',
    icon: 'fab fa-whatsapp',
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    color: '#25D366',
    features: [
      { title: 'Rich Media Support', description: 'Send images, videos, and documents.', icon: 'fas fa-image' },
      { title: 'WhatsApp Business API', description: 'Official integration with analytics.', icon: 'fas fa-code' },
      { title: 'Template Messages', description: 'Pre-approved templates for notifications.', icon: 'fas fa-file-alt' },
      { title: 'Quick Replies', description: 'Interactive buttons for faster responses.', icon: 'fas fa-mouse-pointer' },
    ],
    stats: [
      { label: 'Message Open Rate', value: '98%', percentage: 98 },
      { label: 'Response Time', value: '< 1min', percentage: 85 },
      { label: 'Customer Satisfaction', value: '4.8/5', percentage: 96 },
    ],
  },
  {
    id: 'instagram',
    name: 'Instagram Chat',
    description: 'Real-time website chat support.',
    icon: 'fab fa-instagram',
    gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
    color: '#3B82F6',
    features: [
      { title: 'Smart Widget', description: 'Customizable chat widget.', icon: 'fas fa-paint-brush' },
      { title: 'Visitor Tracking', description: 'Track visitor behavior.', icon: 'fas fa-user-check' },
      { title: 'File Sharing', description: 'Share documents during chats.', icon: 'fas fa-file-upload' },
    ],
    stats: [
      { label: 'Conversion Rate', value: '45%', percentage: 45 },
      { label: 'Lead Capture', value: '89%', percentage: 89 },
      { label: 'Session Duration', value: '+3.2min', percentage: 75 },
    ],
  },
  // Add other channels (instagram, voice, sms) similarly if needed
]);

// Computed properties
const activeChannelName = computed(() => channels.value.find(c => c.id === activeChannel.value)?.name || '');
const activeChannelGradient = computed(() => channels.value.find(c => c.id === activeChannel.value)?.gradient || '');
const activeChannelColor = computed(() => channels.value.find(c => c.id === activeChannel.value)?.color || '');
const activeChannelStats = computed(() => channels.value.find(c => c.id === activeChannel.value)?.stats || []);
const activeChannelFeatures = computed(() => channels.value.find(c => c.id === activeChannel.value)?.features || []);

// Sample recent activities (mock data)
const recentActivities = ref([
  { description: 'Sent 500 broadcast messages', icon: 'fas fa-bullhorn', time: '2 hours ago' },
  { description: 'Resolved customer query', icon: 'fas fa-headset', time: '4 hours ago' },
  { description: 'Integrated new template', icon: 'fas fa-file-alt', time: 'Yesterday' },
]);

// Actions
const startIntegration = (channel) => {
  navigateTo(`/integrations?channel=${channel}`);
};
const viewAnalytics = (channel) => {
  navigateTo(`/analytics?channel=${channel}`);
};
const manageFeature = (feature) => {
  // Placeholder for feature management logic
  console.log(`Managing feature: ${feature.title}`);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Minimal animations */
.transition-all {
  transition: all 0.3s ease;
}
</style>