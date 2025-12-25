import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for deployment (use '/portfolio/' if deploying to GitHub Pages with repo name)
  // Leave as '/' for Vercel, Netlify, or custom domain
  base: '/',
})
