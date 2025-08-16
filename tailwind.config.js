/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal do PDR
        'charcoal': '#0B0B0D',
        'graphite': '#141418',
        'primary-red': '#D9162A',
        'deep-red': '#990F1C',
        'metal-gray': '#2A2A31',
        'mist': '#8C8C98',
        'white-80': '#E6E6E6',
      },
      fontFamily: {
        'display': ['Rajdhani', 'Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'reveal': 'reveal 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanlines': 'scanlines 10s linear infinite',
        'ripple': 'ripple 0.2s ease-out',
      },
      keyframes: {
        reveal: {
          '0%': {
            clipPath: 'inset(0 100% 0 0)',
            opacity: '0'
          },
          '100%': {
            clipPath: 'inset(0 0% 0 0)',
            opacity: '1'
          }
        },
        glow: {
          '0%': { boxShadow: '0 0 24px rgba(217, 22, 42, 0.25)' },
          '100%': { boxShadow: '0 0 32px rgba(217, 22, 42, 0.4)' }
        },
        scanlines: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' }
        }
      },
      backdropBlur: {
        'xs': '2px',
      },
      backgroundImage: {
        'alarm': 'linear-gradient(135deg, #0B0B0D 0%, #141418 50%, #990F1C 100%)',
        'neon-red': 'radial-gradient(60% 60% at 80% 20%, rgba(217, 22, 42, 0.2) 0%, transparent 60%)',
      }
    },
  },
  plugins: [],
}
