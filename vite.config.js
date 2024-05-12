import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dynamicImport from 'vite-plugin-dynamic-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      constants: '/src/constants',
      context: '/src/context',
      hooks: '/src/hooks',
      services: '/src/services',
      footer: '/src/footer',
      styles: '/src/styles',
    },
  },
});
