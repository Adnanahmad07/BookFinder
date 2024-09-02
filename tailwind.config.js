/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-course-black': 'radial-gradient(circle, #690606, #620627, #4f183a, #382340, #26273a, #242431, #212128, #1e1e1f, #191819, #131213, #0b0a0a, #000000)',
        'custom-gradient-black': 'linear-gradient(135deg, #000000, #1a1a1a)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class', // Enable dark mode with a 'class'
}
