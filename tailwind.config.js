/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Vibrant blue for headers, buttons
        secondary: '#93c5fd', // Soft blue for hover states
        background: '#f3f4f6', // Light gray for page background
        'card-bg': '#ffffff', // White for cards/sections
        text: '#1f2937', // Dark gray for text
        highlight: '#f59e0b', // Amber for accents
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom-hover': '0 4px 15px rgba(0, 0, 0, 0.1)', // Lighter shadow for light theme
      },
      transitionProperty: {
        shadow: 'box-shadow',
      },
    },
  },
  plugins: [],
};
