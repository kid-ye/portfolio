import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://kid-ye.github.io",
  base: "/portfolio",
  integrations: [sitemap(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark-dimmed",
      },
      defaultColor: false,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["noreferrer"],
        },
      ],
    ],
  },
});
