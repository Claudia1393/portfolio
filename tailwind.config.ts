import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF9',
        panel: '#F1F4F2',
        ink: '#16211F',
        inkSoft: '#4B5A56',
        line: '#E3E7E5',
        pulse: '#0E7C66',
        pulseSoft: '#DCEDE8',
      },
      fontFamily: {
        display: ['"Newsreader"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        draw: {
          to: { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        draw: 'draw 2.2s ease-out forwards',
        blink: 'blink 1s step-start infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
