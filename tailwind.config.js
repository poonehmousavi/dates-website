/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a855f7',
        secondary: '#6366f1',
        accent: '#3b82f6',
        background: '#0f172a',
        light: '#ffffff',
      },
      animation: {
        typing: 'typing 4s steps(40, end) forwards',
      },
      keyframes: {
        typing: {
          from: { width: '0%' },
          to: { width: '60%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
    },
  },
  plugins: [],
}
