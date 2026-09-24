/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // relative asset URLs, so the built site works from any sub-path (GitHub Pages, a folder on a share)
  base: './',
  server: { port: 5173 },
  build: {
    rolldownOptions: {
      output: {
        /* The atlas data is needed by every page (search, nav counts, cross-links), so it
           can't be lazy per route; instead it gets its own long-cached chunks, split by
           collection, separate from React and from the app code. */
        codeSplitting: {
          groups: [
            { name: 'react', test: /node_modules/ },
            { name: 'data-languages', test: /src\/data\/languages\// },
            { name: 'data-type', test: /src\/data\/(typefaces|type-system)\.ts/ },
            { name: 'data-components', test: /src\/data\/components\.ts/ },
            { name: 'data-rest', test: /src\/data\// },
          ],
        },
      },
    },
  },
  test: { include: ['tests/**/*.test.{ts,tsx}'], environment: 'node' },
});
