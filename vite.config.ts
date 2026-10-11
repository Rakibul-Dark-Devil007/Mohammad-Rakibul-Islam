import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use relative base path so assets load properly on GitHub Pages or any subpath
  base: './',
  server: {
    port: 3000,
    open: true,
  },
});
