import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  integrations: [
    {
      name: "luma:separate-tool-caches",
      hooks: {
        "astro:config:setup": ({ command, updateConfig }) => {
          // Dev, type checking and builds must not reuse optimized virtual modules.
          updateConfig({
            vite: {
              cacheDir: fileURLToPath(
                new URL(`./node_modules/.vite/luma-${command}/`, import.meta.url),
              ),
            },
          });
        },
      },
    },
  ],
});
