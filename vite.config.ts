import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor dependencies
          "vendor-react": ["react", "react-dom"],
          "vendor-ui": ["swiper", "lenis"], // Ensure lenis is properly used
          "vendor-router": ["react-router-dom"], // Useful if using React Router
        },
      },
      treeshake: true, // Remove unused code
    },
    chunkSizeWarningLimit: 800, // Adjust warning limit for large bundles
    assetsInlineLimit: 4096, // Inline assets below 4kb
  },
  optimizeDeps: {
    include: ["react", "react-dom", "swiper", "lenis", "react-router-dom"],
  },
});
