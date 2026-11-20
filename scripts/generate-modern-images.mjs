import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const galleryDir = path.join(rootDir, "public", "Gallary");

const WEBP_QUALITY = 82;
const AVIF_QUALITY = 68;
const EFFORT = 4;

const isForce = process.argv.includes("--force");

async function generateModernImages() {
  console.log(`[images:modern] Scanning ${galleryDir}...`);

  if (!fs.existsSync(galleryDir)) {
    console.error(`[images:modern] Gallery directory not found: ${galleryDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(galleryDir).filter((file) => file.toLowerCase().endsWith(".jpeg")).sort();

  if (files.length === 0) {
    console.warn(`[images:modern] No JPEG files found in ${galleryDir}`);
    return;
  }

  console.log(`[images:modern] Found ${files.length} JPEG images. Processing modern formats (WebP q=${WEBP_QUALITY}, AVIF q=${AVIF_QUALITY})...`);

  let totalOrigBytes = 0;
  let totalWebpBytes = 0;
  let totalAvifBytes = 0;
  let createdWebpCount = 0;
  let createdAvifCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const srcPath = path.join(galleryDir, file);
    const origStat = fs.statSync(srcPath);
    totalOrigBytes += origStat.size;

    const baseName = file.replace(/\.jpeg$/i, "");
    const webpPath = path.join(galleryDir, `${baseName}.webp`);
    const avifPath = path.join(galleryDir, `${baseName}.avif`);

    const hasWebp = fs.existsSync(webpPath) && fs.statSync(webpPath).size > 0;
    const hasAvif = fs.existsSync(avifPath) && fs.statSync(avifPath).size > 0;

    let webpBytes = 0;
    let avifBytes = 0;

    if (!hasWebp || isForce) {
      const webpBuf = await sharp(srcPath)
        .webp({ quality: WEBP_QUALITY, effort: EFFORT })
        .toBuffer();
      fs.writeFileSync(webpPath, webpBuf);
      webpBytes = webpBuf.length;
      createdWebpCount++;
    } else {
      webpBytes = fs.statSync(webpPath).size;
    }

    if (!hasAvif || isForce) {
      const avifBuf = await sharp(srcPath)
        .avif({ quality: AVIF_QUALITY, effort: EFFORT })
        .toBuffer();
      fs.writeFileSync(avifPath, avifBuf);
      avifBytes = avifBuf.length;
      createdAvifCount++;
    } else {
      avifBytes = fs.statSync(avifPath).size;
    }

    if (hasWebp && hasAvif && !isForce) {
      skippedCount++;
    }

    totalWebpBytes += webpBytes;
    totalAvifBytes += avifBytes;
  }

  const formatMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);
  const origMB = formatMB(totalOrigBytes);
  const webpMB = formatMB(totalWebpBytes);
  const avifMB = formatMB(totalAvifBytes);
  const webpSavingsPct = ((1 - totalWebpBytes / totalOrigBytes) * 100).toFixed(1);
  const avifSavingsPct = ((1 - totalAvifBytes / totalOrigBytes) * 100).toFixed(1);

  console.log(`\n============================================================`);
  console.log(`[images:modern] Image Optimization Complete!`);
  console.log(`------------------------------------------------------------`);
  console.log(`Processed files:      ${files.length} JPEG assets`);
  console.log(`Generated WebP:       ${createdWebpCount} created (${skippedCount} already existed)`);
  console.log(`Generated AVIF:       ${createdAvifCount} created (${skippedCount} already existed)`);
  console.log(`Total Original JPEG:  ${origMB} MB (${totalOrigBytes.toLocaleString()} bytes)`);
  console.log(`Total WebP:           ${webpMB} MB (${totalWebpBytes.toLocaleString()} bytes) -> Saved: ${webpSavingsPct}%`);
  console.log(`Total AVIF:           ${avifMB} MB (${totalAvifBytes.toLocaleString()} bytes) -> Saved: ${avifSavingsPct}%`);
  console.log(`Total Storage Saved:  ${(origMB - avifMB).toFixed(2)} MB max reduction per full archive load`);
  console.log(`============================================================\n`);
}

generateModernImages().catch((err) => {
  console.error("[images:modern] Fatal error:", err);
  process.exit(1);
});
