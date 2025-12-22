import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages with a custom domain (root at /), keep assets absolute
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        de: resolve(__dirname, 'de/index.html'),
        fr: resolve(__dirname, 'fr/index.html'),
        es: resolve(__dirname, 'es/index.html'),
        it: resolve(__dirname, 'it/index.html'),
        pl: resolve(__dirname, 'pl/index.html'),
        'zh-cn': resolve(__dirname, 'zh-cn/index.html'),
        ja: resolve(__dirname, 'ja/index.html'),
        ko: resolve(__dirname, 'ko/index.html'),
        pt: resolve(__dirname, 'pt/index.html'),
      },
    },
  },
})
