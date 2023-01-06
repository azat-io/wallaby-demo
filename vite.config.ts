import type { UserConfigExport } from 'vite'

import { createHtmlPlugin } from 'vite-plugin-html'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default (): UserConfigExport =>
  defineConfig({
    build: {
      target: 'esnext',
      sourcemap: false,
      assetsDir: '',
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          minifyURLs: true,
          removeAttributeQuotes: true,
          removeComments: true,
          removeEmptyAttributes: true,
          html5: true,
          keepClosingSlash: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '~': __dirname,
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.pcss', '.css'],
    },
    server: {
      port: 3000,
    },
  })
