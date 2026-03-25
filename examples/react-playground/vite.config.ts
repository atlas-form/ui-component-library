import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: /^@atlas-art\/ui-react$/,
        replacement: path.resolve(rootDir, "../../packages/react/src/index.ts"),
      },
      {
        find: /^@atlas-art\/ui-core$/,
        replacement: path.resolve(rootDir, "../../packages/core/src/index.ts"),
      },
      {
        find: /^@atlas-art\/ui-core\/styles\/ui\.css$/,
        replacement: path.resolve(rootDir, "../../packages/core/styles/ui.css"),
      },
    ],
  },
});
