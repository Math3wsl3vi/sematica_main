<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">

    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-6 text-center">
        <div class="animate-fade-in">
          <span class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
            🚀 Omnichannel Excellence
          </span>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Connect Every
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Customer Touchpoint
            </span>
          </h1>
          <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Seamlessly integrate WhatsApp, Web Chat, Instagram, Voice, and more. One platform, unlimited possibilities for customer engagement.
          </p>
        </div>
        <!-- Channel Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-delay-400">
          <div class="text-center">
            <div class="text-3xl font-bold text-green-600">2B+</div>
            <div class="text-sm text-gray-600">WhatsApp Users</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600">85%</div>
            <div class="text-sm text-gray-600">Web Chat Preference</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-pink-600">1.4B+</div>
            <div class="text-sm text-gray-600">Instagram Users</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-orange-600">73%</div>
            <div class="text-sm text-gray-600">Prefer Voice Support</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Chapter Navigation -->
    <section class="py-12 bg-white/50 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button
            v-for="channel in channels"
            :key="channel.id"
            :class="[
              'flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300',
              activeChapter === channel.id
                ? 'bg-gradient-to-r text-white shadow-lg transform scale-105'
                : 'bg-white/70 text-gray-600 hover:bg-white/90 hover:text-gray-800 hover:shadow-md'
            ]"
            :style="activeChapter === channel.id ? `background: ${channel.gradient}` : ''"
            @click="activeChapter = channel.id"
          >
            <i :class="[channel.icon, 'mr-2 text-lg']"/>
            {{ channel.name }}
          </button>
        </div>
        <!-- Progress Bar -->
        <div class="w-full bg-gray-200 rounded-full h-1 mb-8">
          <div
            class="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-500"
            :style="{ width: `${((channels.findIndex(c => c.id === activeChapter) + 1) / channels.length) * 100}%` }"
          />
        </div>
      </div>
    </section>
    <!-- Chapter Content -->
    <section class="py-16">
      <div class="container mx-auto px-6">
        <TransitionGroup name="chapter" mode="out-in">
          <div
            v-for="channel in channels.filter(c => c.id === activeChapter)"
            :key="channel.id"
            class="chapter-content"
          >
            <!-- Chapter Header -->
            <div class="text-center mb-16">
              <div
                :class="[
                  'w-20 h-20 mx-auto rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg'
                ]"
                :style="`background: ${channel.gradient}`"
              >
                <i :class="[channel.icon, 'text-3xl']"/>
              </div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {{ channel.name }}
                <span class="text-2xl font-normal text-gray-500">Chapter</span>
              </h2>
              <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                {{ channel.description }}
              </p>
            </div>
            <!-- Key Features Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <!-- Features List -->
              <div>
                <h3 class="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                  <div
                    class="w-8 h-8 rounded-lg mr-3 flex items-center justify-center"
                    :style="`background: ${channel.gradient}`"
                  >
                    <i class="fas fa-star text-white text-sm"/>
                  </div>
                  Key Features
                </h3>
                <div class="space-y-6">
                  <div
                    v-for="(feature, index) in channel.features"
                    :key="feature.title"
                    class="flex items-start group"
                    :style="{ animationDelay: `${index * 100}ms` }"
                  >
                    <div
                      class="w-10 h-10 rounded-xl mr-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                      :style="`background: linear-gradient(135deg, ${channel.color}20, ${channel.color}10)`"
                    >
                      <i :class="[feature.icon, 'text-lg']" :style="`color: ${channel.color}`"/>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-800 mb-2">{{ feature.title }}</h4>
                      <p class="text-gray-600">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Visual/Stats -->
              <div class="space-y-8">
                <!-- Usage Stats -->
                <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
                  <h3 class="text-2xl font-bold text-gray-800 mb-6">{{ channel.name }} Impact</h3>
                  <div class="space-y-6">
                    <div
                      v-for="stat in channel.stats"
                      :key="stat.label"
                      class="flex items-center justify-between"
                    >
                      <span class="text-gray-600">{{ stat.label }}</span>
                      <div class="flex items-center gap-3">
                        <div class="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            class="h-full rounded-full transition-all duration-1000 delay-500"
                            :style="`width: ${stat.percentage}%; background: ${channel.gradient}`"
                          />
                        </div>
                        <span class="font-bold text-gray-800 min-w-[3rem]">{{ stat.value }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Success Story -->
                <div
                  class="bg-gradient-to-br p-8 rounded-3xl text-white shadow-lg"
                  :style="`background: ${channel.gradient}`"
                >
                  <h3 class="text-xl font-bold mb-4">Success Story</h3>
                  <div class="text-white/90 mb-4">{{ channel.successStory.company }}</div>
                  <div class="text-3xl font-bold mb-2">{{ channel.successStory.metric }}</div>
                  <div class="text-white/80">{{ channel.successStory.description }}</div>
                </div>
              </div>
            </div>
            <!-- Use Cases -->
            <div class="mb-16">
              <h3 class="text-3xl font-bold text-gray-800 text-center mb-12">Common Use Cases</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  v-for="useCase in channel.useCases"
                  :key="useCase.title"
                  class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    class="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    :style="`background: linear-gradient(135deg, ${channel.color}20, ${channel.color}10)`"
                  >
                    <i :class="[useCase.icon, 'text-xl']" :style="`color: ${channel.color}`"/>
                  </div>
                  <h4 class="font-bold text-gray-800 mb-2">{{ useCase.title }}</h4>
                  <p class="text-gray-600 text-sm">{{ useCase.description }}</p>
                </div>
              </div>
            </div>
            <!-- Integration Demo -->
            <div class="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-800 mb-4">Ready to Integrate?</h3>
                  <p class="text-gray-600 mb-6">
                    Get {{ channel.name.toLowerCase() }} up and running in minutes with our pre-built templates
                    and easy setup process.
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4">
                    <button
                      :class="[
                        'px-6 py-3 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center'
                      ]"
                      :style="`background: ${channel.gradient}`"
                      @click="startIntegration(channel)"
                    >
                      <i class="fas fa-rocket mr-2"/>
                      Start Integration
                    </button>
                    <button
                      class="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all"
                      @click="viewDemo(channel)"
                    >
                      <i class="fas fa-play mr-2"/>
                      View Demo
                    </button>
                  </div>
                </div>
                <div class="flex-shrink-0">
                  <div
                    class="w-32 h-32 rounded-2xl flex items-center justify-center shadow-lg"
                    :style="`background: ${channel.gradient}`"
                  >
                    <i :class="[channel.icon, 'text-5xl text-white']"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </section>
    <!-- Chapter Navigation Footer -->
    <section class="py-12 bg-white/50 backdrop-blur-sm">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between">
          <button
            :disabled="currentChapterIndex === 0"
            :class="[
              'flex items-center px-6 py-3 rounded-xl font-semibold transition-all',
              currentChapterIndex === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-blue-600 hover:bg-white/70'
            ]"
            @click="previousChapter"
          >
            <i class="fas fa-arrow-left mr-2"/>
            Previous Chapter
          </button>
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">
              {{ currentChapterIndex + 1 }} of {{ channels.length }}
            </span>
          </div>
          <button
            :disabled="currentChapterIndex === channels.length - 1"
            :class="[
              'flex items-center px-6 py-3 rounded-xl font-semibold transition-all',
              currentChapterIndex === channels.length - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-blue-600 hover:bg-white/70'
            ]"
            @click="nextChapter"
          >
            Next Chapter
            <i class="fas fa-arrow-right ml-2"/>
          </button>
        </div>
      </div>
    </section>
    <!-- All Channels Overview -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="container mx-auto px-6 text-center text-white">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Why Choose Omnichannel with Sematicca?
        </h2>
        <p class="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
          Don't limit your business to just one channel. Connect with customers wherever they are,
          with consistent experiences across all touchpoints.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <i class="fas fa-sync-alt text-2xl text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2">Unified Experience</h3>
            <p class="text-white/80">Consistent conversations across all channels with shared context</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <i class="fas fa-chart-line text-2xl text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2">Better Analytics</h3>
            <p class="text-white/80">Complete customer journey insights from all touchpoints</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <i class="fas fa-users text-2xl text-white"/>
            </div>
            <h3 class="text-xl font-bold mb-2">Wider Reach</h3>
            <p class="text-white/80">Connect with customers on their preferred communication channel</p>
          </div>
        </div>
        <NuxtLink
          to="/get-started"
          class="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:shadow-xl transition-all hover:scale-105"
        >
          <i class="fas fa-rocket mr-3"/>
          Start Your Omnichannel Journey
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Page meta
definePageMeta({
  title: 'Omnichannel Support - Connect Every Customer Touchpoint | Sematicca',
  description: "Seamlessly integrate WhatsApp, Web Chat, Instagram, Voice, and more with Sematicca's omnichannel platform.",
});

// Reactive data
const activeChapter = ref('whatsapp');

// Channels data
const channels = ref([
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'The world’s most popular messaging platform with 2+ billion users. Perfect for customer support, sales, and notifications.',
    icon: 'fab fa-whatsapp',
    gradient: 'linear-gradient(135deg, #25D366, #128C7E)',
    color: '#25D366',
    features: [
      {
        title: 'Rich Media Support',
        description: 'Send images, videos, documents, and location data seamlessly',
        icon: 'fas fa-image',
      },
      {
        title: 'WhatsApp Business API',
        description: 'Official integration with advanced features and analytics',
        icon: 'fas fa-code',
      },
      {
        title: 'Template Messages',
        description: 'Pre-approved templates for notifications and marketing',
        icon: 'fas fa-file-alt',
      },
      {
        title: 'Quick Replies',
        description: 'Interactive buttons for faster customer responses',
        icon: 'fas fa-mouse-pointer',
      },
    ],
    stats: [
      { label: 'Message Open Rate', value: '98%', percentage: 98 },
      { label: 'Response Time', value: '< 1min', percentage: 85 },
      { label: 'Customer Satisfaction', value: '4.8/5', percentage: 96 },
      { label: 'Conversion Rate', value: '67%', percentage: 67 },
    ],
    successStory: {
      company: 'Kenyan Restaurant Chain',
      metric: '+150% Orders',
      description: 'Increased online orders through WhatsApp menu sharing and voice ordering integration',
    },
    useCases: [
      {
        title: 'Customer Support',
        description: 'Handle queries, complaints, and provide instant assistance',
        icon: 'fas fa-headset',
      },
      {
        title: 'Order Management',
        description: 'Take orders, process payments, and track deliveries',
        icon: 'fas fa-shopping-cart',
      },
      {
        title: 'Appointment Booking',
        description: 'Schedule and manage appointments with automated reminders',
        icon: 'fas fa-calendar-check',
      },
      {
        title: 'Product Catalog',
        description: 'Showcase products with images, prices, and descriptions',
        icon: 'fas fa-store',
      },
      {
        title: 'Payment Integration',
        description: 'Accept payments through M-Pesa and other local methods',
        icon: 'fas fa-credit-card',
      },
      {
        title: 'Broadcast Messages',
        description: 'Send promotional offers and updates to customer segments',
        icon: 'fas fa-bullhorn',
      },
    ],
  },
  {
    id: 'webchat',
    name: 'Web Chat',
    description: 'Embedded chat widgets that integrate seamlessly into your website, providing instant support to visitors.',
    icon: 'fas fa-comments',
    gradient: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
    color: '#3B82F6',
    features: [
      {
        title: 'Smart Widget',
        description: 'Customizable chat widget that matches your brand design',
        icon: 'fas fa-paint-brush',
      },
      {
        title: 'Visitor Tracking',
        description: 'Track visitor behavior and trigger proactive conversations',
        icon: 'fas fa-user-check',
      },
      {
        title: 'File Sharing',
        description: 'Share documents, images, and files during conversations',
        icon: 'fas fa-file-upload',
      },
      {
        title: 'Offline Messages',
        description: 'Capture leads even when agents are offline',
        icon: 'fas fa-envelope',
      },
    ],
    stats: [
      { label: 'Conversion Rate', value: '45%', percentage: 45 },
      { label: 'Lead Capture', value: '89%', percentage: 89 },
      { label: 'Session Duration', value: '+3.2min', percentage: 75 },
      { label: 'Bounce Rate Reduction', value: '-23%', percentage: 77 },
    ],
    successStory: {
      company: 'E-commerce Store',
      metric: '+200% Sales',
      description: 'Doubled online sales with proactive chat engagement and cart abandonment recovery',
    },
    useCases: [
      {
        title: 'Lead Generation',
        description: 'Capture visitor information and qualify leads automatically',
        icon: 'fas fa-magnet',
      },
      {
        title: 'Sales Support',
        description: 'Guide customers through purchase decisions in real-time',
        icon: 'fas fa-handshake',
      },
      {
        title: 'Technical Support',
        description: 'Provide instant help for product or service issues',
        icon: 'fas fa-tools',
      },
      {
        title: 'Cart Recovery',
        description: 'Prevent cart abandonment with timely interventions',
        icon: 'fas fa-shopping-cart',
      },
      {
        title: 'Feedback Collection',
        description: 'Gather customer feedback and testimonials',
        icon: 'fas fa-star',
      },
      {
        title: 'Live Demos',
        description: 'Conduct product demonstrations and consultations',
        icon: 'fas fa-desktop',
      },
    ],
  },
  {
    id: 'instagram',
    name: 'Instagram Business',
    description: 'Connect with younger demographics through Instagram DMs, Stories, and Shopping features.',
    icon: 'fab fa-instagram',
    gradient: 'linear-gradient(135deg, #E4405F, #8B00FF)',
    color: '#E4405F',
    features: [
      {
        title: 'Instagram Shopping',
        description: 'Sell products directly through Instagram with integrated checkout',
        icon: 'fas fa-shopping-bag',
      },
      {
        title: 'Stories Integration',
        description: 'Respond to story mentions and create interactive content',
        icon: 'fas fa-circle-play',
      },
      {
        title: 'Visual Commerce',
        description: 'Showcase products with high-quality images and videos',
        icon: 'fas fa-camera',
      },
      {
        title: 'Influencer Collaboration',
        description: 'Manage partnerships and track campaign performance',
        icon: 'fas fa-users',
      },
    ],
    stats: [
      { label: 'Engagement Rate', value: '3.2%', percentage: 85 },
      { label: 'Story Views', value: '+156%', percentage: 92 },
      { label: 'DM Response Rate', value: '78%', percentage: 78 },
      { label: 'Shopping Clicks', value: '+89%', percentage: 89 },
    ],
    successStory: {
      company: 'Fashion Boutique',
      metric: '+300% Followers',
      description: 'Tripled Instagram following and increased sales through automated DM responses and shopping features',
    },
    useCases: [
      {
        title: 'Product Discovery',
        description: 'Help customers find products through visual search and recommendations',
        icon: 'fas fa-search',
      },
      {
        title: 'Customer Service',
        description: 'Handle customer inquiries and complaints through DMs',
        icon: 'fas fa-message',
      },
      {
        title: 'Influencer Marketing',
        description: 'Manage influencer campaigns and track performance',
        icon: 'fas fa-star',
      },
      {
        title: 'User Generated Content',
        description: 'Encourage and manage customer photos and reviews',
        icon: 'fas fa-camera-retro',
      },
      {
        title: 'Event Promotion',
        description: 'Promote events and manage RSVPs through Instagram',
        icon: 'fas fa-calendar-alt',
      },
      {
        title: 'Brand Storytelling',
        description: 'Share brand stories and behind-the-scenes content',
        icon: 'fas fa-book-open',
      },
    ],
  },
  {
    id: 'voice',
    name: 'Voice Assistant',
    description: 'AI-powered voice interactions for phone support, IVR systems, and hands-free customer service.',
    icon: 'fas fa-microphone',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    color: '#F59E0B',
    features: [
      {
        title: 'Natural Language Processing',
        description: 'Understand customer intent in multiple languages and dialects',
        icon: 'fas fa-brain',
      },
      {
        title: 'Voice Recognition',
        description: 'Accurate speech-to-text conversion with accent adaptation',
        icon: 'fas fa-microphone-alt',
      },
      {
        title: 'IVR Integration',
        description: 'Replace traditional phone menus with conversational AI',
        icon: 'fas fa-phone',
      },
      {
        title: 'Call Analytics',
        description: 'Track call duration, sentiment, and resolution rates',
        icon: 'fas fa-chart-bar',
      },
    ],
    stats: [
      { label: 'Call Resolution', value: '87%', percentage: 87 },
      { label: 'Wait Time Reduction', value: '-65%', percentage: 65 },
      { label: 'Customer Satisfaction', value: '4.6/5', percentage: 92 },
      { label: 'Cost Savings', value: '42%', percentage: 42 },
    ],
    successStory: {
      company: 'Healthcare Provider',
      metric: '+500% Efficiency',
      description: 'Automated appointment booking and reduced call center workload by 80% with voice AI',
    },
    useCases: [
      {
        title: 'Appointment Booking',
        description: 'Schedule appointments through voice commands and confirmations',
        icon: 'fas fa-calendar',
      },
      {
        title: 'Order Taking',
        description: 'Process food orders and service requests via phone',
        icon: 'fas fa-utensils',
      },
      {
        title: 'Account Inquiries',
        description: 'Check balances, transaction history, and account status',
        icon: 'fas fa-user-circle',
      },
      {
        title: 'Technical Support',
        description: 'Guide customers through troubleshooting steps',
        icon: 'fas fa-wrench',
      },
      {
        title: 'Survey Collection',
        description: 'Conduct automated satisfaction surveys and feedback collection',
        icon: 'fas fa-poll',
      },
      {
        title: 'Emergency Response',
        description: 'Handle urgent requests and route to appropriate departments',
        icon: 'fas fa-exclamation-triangle',
      },
    ],
  },
  {
    id: 'sms',
    name: 'SMS & Messaging',
    description: 'Reliable SMS delivery for notifications, alerts, and two-way communication with customers.',
    icon: 'fas fa-sms',
    gradient: 'linear-gradient(135deg, #10B981, #059669)',
    color: '#10B981',
    features: [
      {
        title: 'Bulk SMS',
        description: 'Send promotional messages and alerts to large customer groups',
        icon: 'fas fa-broadcast-tower',
      },
      {
        title: 'Two-Way SMS',
        description: 'Enable customers to reply and engage in conversations',
        icon: 'fas fa-exchange-alt',
      },
      {
        title: 'Delivery Reports',
        description: 'Track message delivery and read receipts in real-time',
        icon: 'fas fa-check-double',
      },
      {
        title: 'Smart Routing',
        description: 'Optimize delivery through multiple carrier networks',
        icon: 'fas fa-route',
      },
    ],
    stats: [
      { label: 'Delivery Rate', value: '99.2%', percentage: 99 },
      { label: 'Open Rate', value: '95%', percentage: 95 },
      { label: 'Response Rate', value: '72%', percentage: 72 },
      { label: 'Customer Reach', value: '88%', percentage: 88 },
    ],
    successStory: {
      company: 'Retail Chain',
      metric: '+120% Engagement',
      description: 'Boosted customer engagement with targeted SMS campaigns and instant delivery updates',
    },
    useCases: [
      {
        title: 'Promotional Campaigns',
        description: 'Send offers, discounts, and event invitations to customers',
        icon: 'fas fa-tag',
      },
      {
        title: 'Order Updates',
        description: 'Notify customers about order confirmations and shipping status',
        icon: 'fas fa-truck',
      },
      {
        title: 'Appointment Reminders',
        description: 'Send automated reminders for appointments and bookings',
        icon: 'fas fa-calendar-check',
      },
      {
        title: 'Two-Way Support',
        description: 'Engage in customer support via SMS responses',
        icon: 'fas fa-headset',
      },
      {
        title: 'Payment Reminders',
        description: 'Send reminders for due payments and invoices',
        icon: 'fas fa-credit-card',
      },
      {
        title: 'Surveys and Feedback',
        description: 'Collect customer feedback through SMS surveys',
        icon: 'fas fa-poll',
      },
    ],
  },
]);

// Computed property for current chapter index
const currentChapterIndex = computed(() => channels.value.findIndex(c => c.id === activeChapter.value));

// Navigation methods
const previousChapter = () => {
  if (currentChapterIndex.value > 0) {
    activeChapter.value = channels.value[currentChapterIndex.value - 1].id;
  }
};

const nextChapter = () => {
  if (currentChapterIndex.value < channels.value.length - 1) {
    activeChapter.value = channels.value[currentChapterIndex.value + 1].id;
  }
};

// Integration and demo actions
const startIntegration = (channel) => {
  // Redirect to integration setup page with channel query
  navigateTo(`/integrations?channel=${channel.id}`);
};

const viewDemo = (channel) => {
  // Redirect to demo page with channel query
  navigateTo(`/demo?channel=${channel.id}`);
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Fade-in animation for hero */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-fade-in-delay-400 {
  animation: fadeIn 1s ease-in-out 0.4s;
  animation-fill-mode: both;
}

/* Chapter transition */
.chapter-enter-active,
.chapter-leave-active {
  transition: all 0.5s ease;
}

.chapter-enter-from,
.chapter-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Feature animation */
.group {
  animation: fadeIn 0.5s ease-in-out;
  animation-fill-mode: both;
}
</style>