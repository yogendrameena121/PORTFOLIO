/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00d4ff',
        secondary: '#8b5cf6',
        dark: '#0a0a0f',
        'dark-lighter': '#1a1a2e'
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 212, 255, 0.2)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        'gradient': 'gradient-shift 3s ease infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(at 20% 50%, rgba(0, 212, 255, 0.1) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)',
      }
    },
  },
  plugins: [
    function({ addUtilities, e }) {
      addUtilities({
        '.glassmorphism': {
          'background': 'rgba(255, 255, 255, 0.05)',
          'backdrop-filter': 'blur(16px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '0.75rem',
        },
        '.glass-dark': {
          'background': 'rgba(26, 26, 46, 0.4)',
          'backdrop-filter': 'blur(32px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
          'border-radius': '1rem',
        },
        '.gradient-border': {
          'position': 'relative',
          'background': 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(139, 92, 246, 0.3)) padding-box, linear-gradient(135deg, #00d4ff, #8b5cf6) border-box',
          'border': '1px solid transparent',
        },
      });
    },
  ],
}
