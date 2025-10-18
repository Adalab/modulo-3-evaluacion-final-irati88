import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/modulo-3-evaluacion-final-irati88/",
  server: {
    open: "/",
    watch: {
      usePolling: true
    }
  }
})
