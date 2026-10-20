import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' agar hasil build bisa dibuka dari subfolder (mis. http://localhost/cv/dist/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
