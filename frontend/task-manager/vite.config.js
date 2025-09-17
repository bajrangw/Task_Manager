import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',       // important for routing on Vercel
  build: {
    outDir: 'dist' // ensure matches vercel.json distDir
  }
})
