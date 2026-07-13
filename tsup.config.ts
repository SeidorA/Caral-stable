import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Exporta a CommonJS (viejo) y ES Modules (Next.js/React moderno)
  dts: true, // Exporta las definiciones de tipos para TypeScript
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  minify: true,
});
