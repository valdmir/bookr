import { execSync } from "node:child_process";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),tailwindcss(),
    {
      name: "vite-plugin-biome",
      buildStart() {
        try {
          execSync("npx biome check .", { stdio: "inherit" });
        } catch (err) {
          console.error("Biome check failed: ", err);
          process.exit(1);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
