// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'poonehmousavi/dates-website/', // <-- change to your GitHub repo name
})
