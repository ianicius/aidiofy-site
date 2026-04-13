/**
 * Post-build script: generates index.html copies for all SPA routes.
 *
 * GitHub Pages serves static files. Without this, paths like /blog/slug
 * return 404 because there is no file at that path. This script copies
 * each locale's index.html into every known sub-route directory so that
 * GitHub Pages serves a 200 with the correct HTML for every route.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// Blog post slugs — keep in sync with src/data/blog.ts
const BLOG_SLUGS = [
  'why-your-tabletop-rpg-session-sounds-like-a-spreadsheet',
  'stop-listening-to-page-numbers',
  'meaning-what-you-say-direct-ai-voices',
  'audio-and-tts-tools-comparison',
  'how-board-gamers-deal-with-language-barriers',
  'what-reddit-taught-us-about-gaming-language-barriers',
];

// Locale path segments (empty string = English / root)
const LOCALES = ['', 'de', 'fr', 'es', 'it', 'pl', 'zh-cn', 'ja', 'ko', 'pt'];

// Sub-routes that need their own index.html
const ROUTES = [
  'blog',
  'privacy',
  'terms',
  ...BLOG_SLUGS.map(slug => `blog/${slug}`),
];

function ensureDir(dir) {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

let generated = 0;

for (const locale of LOCALES) {
  const localeDir = locale ? join(distDir, locale) : distDir;
  const indexPath = join(localeDir, 'index.html');

  if (!existsSync(indexPath)) {
    console.warn(`Warning: ${indexPath} not found, skipping locale "${locale || 'en'}"`);
    continue;
  }

  const indexHtml = readFileSync(indexPath, 'utf-8');

  for (const route of ROUTES) {
    const routeDir = join(localeDir, route);
    const routeIndex = join(routeDir, 'index.html');

    // Don't overwrite existing files
    if (existsSync(routeIndex)) continue;

    ensureDir(routeDir);
    writeFileSync(routeIndex, indexHtml);
    generated++;
    console.log(`  ${locale ? `/${locale}` : ''}/${route}/index.html`);
  }
}

// Create 404.html from the English index.html as catch-all
const rootIndex = readFileSync(join(distDir, 'index.html'), 'utf-8');
const notFoundPath = join(distDir, '404.html');
if (!existsSync(notFoundPath)) {
  writeFileSync(notFoundPath, rootIndex);
  generated++;
  console.log('  /404.html');
}

console.log(`\nRoute generation complete: ${generated} files created.`);
