// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ucapan-hbd-shifa/', // Ganti sesuai nama repo kamu di GitHub
  plugins: [react()],
});
