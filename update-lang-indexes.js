import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  'de/index.html',
  'es/index.html',
  'fr/index.html',
  'it/index.html',
  'ja/index.html',
  'ko/index.html',
  'pl/index.html',
  'pt/index.html',
  'zh-cn/index.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Skipping ${file} - not found`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove old font imports (the duplicate ones)
  content = content.replace(/    <link href="https:\/\/fonts\.googleapis\.com" rel="preconnect" \/>\n    <link crossorigin="" href="https:\/\/fonts\.gstatic\.com" rel="preconnect" \/>\n    <link\n      href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter:wght@300;400;500;700;900&display=swap"\n      rel="stylesheet"\n    \/>\n/g, '');
  
  // Remove hardcoded Tailwind config script
  content = content.replace(/    <script>\n      tailwind\.config = \{[\s\S]*?\};\n    <\/script>\n/g, '');
  
  // Remove inline styles
  content = content.replace(/    <style>\n      html, body, #root \{[\s\S]*?\n    <\/style>\n/g, '');
  
  // Update favicon reference
  content = content.replace(/    <link rel="icon" type="image\/svg\+xml" href="\/thumbnail\.svg" \/>/g, '    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n');
  
  // Update theme-color
  content = content.replace(/<meta name="theme-color" content="#0F172A" \/>/g, '<meta name="theme-color" content="#ff6b35" />\n');
  
  // Update og:image
  content = content.replace(/<meta property="og:image" content="\/thumbnail\.svg" \/>/g, '<meta property="og:image" content="/favicon.svg" />\n');
  
  // Update twitter:image
  content = content.replace(/<meta name="twitter:image" content="\/thumbnail\.svg" \/>/g, '<meta name="twitter:image" content="/favicon.svg" />\n');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});

console.log('All language index files updated successfully!');
