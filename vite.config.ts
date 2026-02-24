import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Esto permite que import "components/..." funcione
      "components": path.resolve(__dirname, './src/components'),
      "pages": path.resolve(__dirname, './src/pages'),
      "assets": path.resolve(__dirname, './src/assets')
    },
  },
})
