import { execSync } from "node:child_process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
});
