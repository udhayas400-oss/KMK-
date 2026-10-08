import path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT ?? 5173);
const basePath = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    // Polling reliably detects saves inside Windows/OneDrive synced folders.
    watch: { usePolling: true, interval: 100 },
    hmr: true,
    strictPort: true,
    port: Number.isFinite(port) && port > 0 ? port : 5173,
    host: true,
  },
  preview: {
    port: Number.isFinite(port) && port > 0 ? port : 5173,
    host: '0.0.0.0',
  },
});
