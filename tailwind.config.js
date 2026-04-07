/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0F172A', // Deep Charcoal
          secondary: '#1E293B', // Dark Slate Blue
          dark: '#020617', // Almost Black
          card: '#1E293B',
        },
        primary: {
          DEFAULT: '#3B82F6', // Royal Blue
          light: '#60A5FA',
        },
        accent: {
          cyan: '#06B6D4', // Electric Cyan
          purple: '#8B5CF6', // Violet
          pink: '#EC4899', // Magenta
          amber: '#F59E0B', // Amber Gold
        },
        gold: {
          soft: '#D4AF37',
          light: '#FACC15',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#E5E7EB',
          muted: '#9CA3AF',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand': 'linear-gradient(to right, #06B6D4, #3B82F6, #8B5CF6, #EC4899, #F59E0B)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'glow-brand': '0 0 30px rgba(59, 130, 246, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(59, 130, 246, 0.2)',
      }
    },
  },
  plugins: [],
}