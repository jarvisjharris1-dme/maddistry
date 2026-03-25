import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind 4 handles everything through this plugin now
  ],
  resolve: {
    alias: {
      // This allows you to use '@/' for absolute imports from your src folder
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    target: 'esnext', // Best for modern browsers and MUI/Lucide icons
    minify: 'esbuild',
    reportCompressedSize: false, // Speeds up Vercel build time
    rollupOptions: {
      output: {
        // Helps with memory management during build by splitting vendor chunks
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
});
