import { defineConfig } from '@hyperoracle/release-scripts'

export default defineConfig({
  entries: [
    {
      input: 'src/index',
      distDir: './dist',
      name: 'index',
      build: {
        declaration: true,
        clean: true,
        rollup: {
          emitCJS: true,
          esbuild: {
            define: {
              __BROWSER__: 'false',
            }
          }
        },
      }
    },
    {
      input: 'src/index',
      outDir: './dist2',
      name: 'browser',
      build: {
        rollup: {
          esbuild: {
            define: {
              __BROWSER__: 'true',
            }
          }
        },
      }
    }
  ],
  build: {
    declaration: true,
    clean: true,
    rollup: {
      emitCJS: true,
    },
  }
})
