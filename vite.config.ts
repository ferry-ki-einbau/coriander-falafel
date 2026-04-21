import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: { port: 5175, strictPort: false },
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist',
    rollupOptions: isSsrBuild ? {
      input: 'src/entry-server.tsx',
    } : {},
  },
}))
