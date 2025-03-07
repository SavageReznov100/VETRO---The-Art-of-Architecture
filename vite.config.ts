// https://vite.dev/config/
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
          // Split vendor code from your application code
          "vendor-react": ["react", "react-dom"],
          "vendor-ui": ["swiper", "lenis"], // Include lenis if it's a significant dependency
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
    include: ["react", "react-dom", "swiper", "lenis"],
  },
});
