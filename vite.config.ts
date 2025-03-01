import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react']
        }
      }
    },
    copyPublicDir: true
  },
  server: {
    warmup: {
      clientFiles: [
        './src/App.tsx',
        './src/main.tsx',
        './src/LanguageContext.tsx'
      ]
    }
  },
  publicDir: 'public'
});