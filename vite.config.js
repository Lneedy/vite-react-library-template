import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import peerDepsExternalPlugin from 'rollup-plugin-peer-deps-external'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), peerDepsExternalPlugin()],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    jsxInject: 'import React from "react";',
    minify: false,
    target: 'esnext',
    sourcemap: true,
    loader: 'tsx'
  },
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'UI-X-Components',
      formats: ['es', 'umd']
    },
    minify: false,
    target: 'esnext',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
  },
  css: {
    preprocessorOptions: {
      less: {
      }
    }
  },
  optimizeDeps: {
  }
})
