import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name:'Remote',
      filename:'remoteEntry.js',
      exposes: {
        './Header': './src/components/Header.jsx',
        './Footer': './src/components/FooterComponent.jsx'
      },
      remotes: {
        store:'http://localhost:5000/assets/remoteEntry.js'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})