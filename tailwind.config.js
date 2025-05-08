/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'emerald': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        'nightshade': {
          50: '#f5f7fa',
          100: '#ebeff4',
          200: '#d2dbe7',
          300: '#adbcd3',
          400: '#8097ba',
          500: '#5f79a1',
          600: '#496286',
          700: '#3b4f6d',
          800: '#33435b',
          900: '#2c394e',
          950: '#1a2235',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(2, 44, 34, 0.8), rgba(26, 34, 53, 0.9)), url('/src/assets/images/hero-bg.jpg')",
        'feature-pattern': "linear-gradient(to right, rgba(26, 34, 53, 0.9), rgba(2, 44, 34, 0.8))",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};