import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--rot))' },
          '50%': { transform: 'translateY(-20px) rotate(var(--rot))' },
        },
        'pulse-custom': {
          '0%': { opacity: '0.4', transform: 'scale(0.9)' },
          '100%': { opacity: '0.7', transform: 'scale(1.1)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-custom': 'pulse-custom 5s infinite alternate',
        'fade-up': 'fadeUp 0.5s ease',
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
