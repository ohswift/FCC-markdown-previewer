import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prismjsPlugin } from "vite-plugin-prismjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prismjsPlugin({
      languages: ["json", "javascript"],
      //  languages: 'all',
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
