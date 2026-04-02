import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
  resolve: {
    alias: {
      // Clean imports: import X from '@/components/...'
      '@': '/src',
    },
  },
  build: {
    // Code splitting: separate vendor chunks for better browser caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/@mui')) {
            return 'vendor-mui';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
        },
      },
    },
  },
});
