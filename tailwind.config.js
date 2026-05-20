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
        cyber: {
          bg: '#030305',
          card: 'rgba(10, 10, 20, 0.75)',
          accent: '#00f0ff', // neon blue
          red: '#ff003c',    // neon red/pink
          green: '#39ff14',  // terminal green
          text: '#c9d1d9',
          title: '#ffffff',
        }
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'cyber-blue': '0 0 15px rgba(0, 240, 255, 0.4)',
        'cyber-red': '0 0 15px rgba(255, 0, 60, 0.4)',
        'cyber-green': '0 0 15px rgba(57, 255, 20, 0.4)',
        'cyber-blue-lg': '0 0 30px rgba(0, 240, 255, 0.7)',
        'cyber-red-lg': '0 0 30px rgba(255, 0, 60, 0.7)',
        'cyber-green-lg': '0 0 30px rgba(57, 255, 20, 0.7)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-glow': 'cyberGlow 2s infinite alternate',
      },
      keyframes: {
        cyberGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 240, 255, 0.6)' }
        }
      }
    },
  },
  plugins: [],
}
