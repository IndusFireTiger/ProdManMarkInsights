// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // MUST match the deployed origin. The hyphenated host is the live one;
  // the un-hyphenated `prodmaninsights.netlify.app` 404s. This value feeds
  // canonical URLs, og:url and the sitemap, so getting it wrong tells search
  // engines every page's authoritative copy lives at a dead address.
  site: 'https://prodmanmark-insights.netlify.app',
});
