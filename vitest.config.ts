import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      exclude: ['**/*.test.*', '**/test-*.*', 'src/components.tsx'],
    },
  },
});
