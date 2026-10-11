/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080b11',       // deep near-black background
          surface: '#0f141f',  // card/panel background
          elevated: '#171f2f', // elevated popover/modal
          border: '#202b3e',   // subtle border
          muted: '#8e9ab0',    // secondary text
          light: '#f1f5f9',    // primary text
        },
        brand: {
          primary: '#6366f1',  // indigo
          accent: '#06b6d4',   // cyan
          purple: '#8b5cf6',   // violet
          blue: '#3b82f6',     // royal blue
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'glow-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.35)',
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.65)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
