import { defineConfig } from '@hyperoracle/release-scripts'

export default defineConfig({
  entries: [
    'src/index',
  ],
  build: {
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
    },
  }
})
