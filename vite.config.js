import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" uses relative asset paths, so this works whether it's hosted
// at the root of a domain or in a GitHub Pages project subfolder
// (username.github.io/story-atelier/) without needing to hardcode the name.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
