import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Add the server configuration here
  server: {
    proxy: {
      // This will proxy any request starting with /api to your backend server
      '/api': {
        target: 'http://localhost:5000', // Make sure this is your backend server's address
        changeOrigin: true, // This is often needed
        secure: false,      // Set to false for http backend servers
      },
    },
  },
})
