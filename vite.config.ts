import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import path from 'path'

const config: UserConfig = {
  plugins: [react(), vike()],
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      '#components': path.join(__dirname, '/src/components'),
      '#hooks': path.join(__dirname, '/src/hooks'),
      '#pages': path.join(__dirname, '/src/pages'),
      '#locales': path.join(__dirname, '/src/locales'),
      '#assets': path.join(__dirname, '/src/assets'),
      '#layouts': path.join(__dirname, '/src/layouts'),
      '#utils': path.join(__dirname, '/src/utils'),
      '#stores': path.join(__dirname, '/src/stores'),
      '#renderer': path.join(__dirname, '/src/renderer'),
      '#src': path.join(__dirname, '/src'),
      '#plugins': path.join(__dirname, '/src/plugins'),
      '#types': path.join(__dirname, '/src/types'),
      '#root': __dirname,
    },
  },
}

export default config
