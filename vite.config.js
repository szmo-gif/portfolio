import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://szmo-gif.github.io/portfolio/',
  plugins: [react()],
});
