import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import path from "path";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  /* 
    if you want to run localhost without ssl cert
    remove server property `https` and `mkcert()` from plugin property
    then run `npm run serve` npm script 
  */
  server: {
    https: true,
  },
  plugins: [
    { ...mkcert() },
    { ...EnvironmentPlugin(["UNSPLASH_ACCESS_TOKEN"]) },
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
