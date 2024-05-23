import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import { sync as globSync } from 'glob'

const IGNORE_PATTERNS = ['**/*.{test,spec}.{tsx,ts}', '**/test/**/*', '**/mocks/**/*']

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: globSync('src/**/*.{tsx,ts}', {
        ignore: IGNORE_PATTERNS
      }),
      name: 'aimet',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react'],
    }
  },
  plugins: [dts({
    exclude: IGNORE_PATTERNS
  }), react()],
})
