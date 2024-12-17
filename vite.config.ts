import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === "math-field"
        }
      }
    })
  ],
  resolve: {
    alias: {
      src: "/src/"
    }
  },
  server: {
    open: true
  }
});