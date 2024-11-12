import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        feed: resolve(__dirname, 'feed.html'),
        profile: resolve(__dirname, 'profile.html'),
        register: resolve(__dirname, 'register.html'),
      },
    },
  },
  base: './', // Ensures relative paths are used in built HTML files
});
