import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { copyFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  "base": "./",
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync('dist/index.html', 'dist/404.html');
      }
    }
  ],
   resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
   },
})
