import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgPlugin from "vite-plugin-svg";
import dotenv from 'dotenv';

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgPlugin({
      inline: true,
    }),
    react(),
  ],
  server: {
    port: 3000,
  },
  define: {
    'process.env': process.env
  }
});
