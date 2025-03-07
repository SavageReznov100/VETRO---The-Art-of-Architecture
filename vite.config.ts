import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Improve chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code (React, etc) from your application code
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": ["swiper"],
          // Add other chunking as needed based on your dependencies
        },
      },
    },
    // Increase warning limit if you prefer (optional)
    chunkSizeWarningLimit: 800,
    // Optimize asset compression
    assetsInlineLimit: 4096, // 4kb
  },
  // Optimize images during development
  optimizeDeps: {
    include: ["react", "react-dom", "swiper"],
  },
  // Improve browser caching
  server: {
    headers: {
      "Cache-Control": "max-age=31536000,immutable",
    },
  },
});
