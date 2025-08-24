/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, // Disable dark mode entirely
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};