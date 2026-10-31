import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this repo's root. The source page lives in src/,
// the build goes to dist/, and `npm run build` copies dist/index.html
// to the root index.html (the live page), so asset URLs start with /dist/.
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  root: 'src',
  publicDir: '../public',
  base: command === 'build' ? '/dist/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [react()],
}))
