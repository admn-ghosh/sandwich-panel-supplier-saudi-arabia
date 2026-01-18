import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Relative base path for flexible deployment
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Fix: path.resolve automatically prepends the current working directory if the path is relative, 
        // avoiding the type error on the global 'process' object.
        main: resolve('index.html'),
        arabic: resolve('index-ar.html'),
      },
    },
  },
  server: {
    port: 3000,
    host: true
  }
});
