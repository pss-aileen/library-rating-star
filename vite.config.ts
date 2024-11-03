import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'lib/main.ts',
      name: 'RatingStar',
      formats: ['umd'],
      fileName: (format) => `ratingStar.${format}.js`,
    },
    rollupOptions: {
      output: {
        assetFileNames: 'ratingStar.css',
      },
    },
  },
});
