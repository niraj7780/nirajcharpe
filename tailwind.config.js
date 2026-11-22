/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#edf6ff',
          100: '#d7ebff',
          200: '#b9dcfe',
          300: '#8ac5fe',
          400: '#53a2fc',
          500: '#2b7ef6',
          600: '#1561ea',
          700: '#0052db', // Electric blue accent
          800: '#1144b2',
          900: '#143c8c',
          950: '#102656',
        },
        electric: {
          cyan: '#00F0FF',
          blue: '#0066FF',
          indigo: '#4F46E5',
          violet: '#7C3AED',
        },
        dark: {
          bg: '#090A0F',
          surface: '#11131B',
          card: '#161922',
          border: '#222736',
          muted: '#8E95AA',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],
};
