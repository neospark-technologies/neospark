import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

console.log("== NEO SPARK MEDIA AUDIT ==");
console.log(`Auditing references against ${publicDir}...`);

// Read all files in public recursively
function getExistingFiles(dir, base = "") {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const relPath = path.join(base, file).replace(/\\/g, "/");
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getExistingFiles(filePath, relPath));
    } else {
      results.push(relPath);
    }
  }
  return results;
}

const existingPublicFiles = new Set(getExistingFiles(publicDir));
console.log(`Found ${existingPublicFiles.size} files in /public`);

// Find image/video references in src/
const srcDir = path.join(rootDir, "src");
const imageRefRegex = /(["']\/images\/[^"']+\.(?:jpg|jpeg|png|webp|svg|gif|mov|mp4|heic)["'])/gi;

const missingRefs = new Set();
const foundRefs = new Set();

function scanDir(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      scanDir(filePath);
    } else if (/\.(ts|tsx|js|jsx|mjs|json|css)$/.test(file)) {
      const content = fs.readFileSync(filePath, "utf-8");
      let match;
      while ((match = imageRefRegex.exec(content)) !== null) {
        const raw = match[1].slice(1, -1); // remove quotes
        const relToPublic = raw.replace(/^\//, "");
        if (existingPublicFiles.has(relToPublic)) {
          foundRefs.add(raw);
        } else {
          missingRefs.add(`${raw} (referenced in ${path.relative(rootDir, filePath)})`);
        }
      }
    }
  }
}

scanDir(srcDir);

console.log("\n--- VALID REFERENCES ---");
foundRefs.forEach(r => console.log(`✓ ${r}`));

console.log("\n--- MISSING REFERENCES ---");
if (missingRefs.size === 0) {
  console.log("No missing references found! All referenced files exist in /public.");
} else {
  missingRefs.forEach(r => console.error(`✗ MISSING: ${r}`));
}

console.log("\n--- UNREFERENCED FILES IN /public/images ---");
const unreferenced = [];
for (const file of existingPublicFiles) {
  const webPath = "/" + file;
  if (!foundRefs.has(webPath)) {
    unreferenced.push(webPath);
  }
}
unreferenced.forEach(u => console.log(`? Unreferenced: ${u}`));

if (missingRefs.size > 0) {
  console.log(`\nAudit completed with ${missingRefs.size} missing references.`);
  process.exit(1);
} else {
  console.log("\nAudit passed! All referenced files exist.");
}
