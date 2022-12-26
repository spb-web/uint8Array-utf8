import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'uint8ArrayToUtf8',
  entry: ['src'],
  sourcemap: true,
  clean: true,
  minify: false,
  outDir: './dist',
  format: ['cjs', 'esm'],
  dts: true,
  bundle: false,
  treeshake: true,
})
