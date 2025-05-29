import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'state': path.resolve(__dirname, './src/state'),
      'components': path.resolve(__dirname, './src/components'),
      'src': path.resolve(__dirname, './src'),
    }
  },
  define: {
    'import.meta.env.VITE_APP_BASE_URL': JSON.stringify('http://localhost:5001')
  }
})
