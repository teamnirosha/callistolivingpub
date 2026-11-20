import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const srcFavicon = path.join(rootDir, "src", "assets", "favicon.png");
const srcLogo = path.join(rootDir, "src", "assets", "callisto_final_Logo.png");
const publicDir = path.join(rootDir, "public");

async function createIco(sizes, inputPath, outputPath) {
  const pngBuffers = [];
  for (const s of sizes) {
    const buf = await sharp(inputPath)
      .resize(s, s, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers.push({ size: s, buf });
  }

  const numImages = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  let offset = 6 + 16 * numImages;

  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 0); // width
    entry.writeUInt8(item.size >= 256 ? 0 : item.size, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buf.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += item.buf.length;
  }

  const fullIco = Buffer.concat([header, ...dirEntries, ...pngBuffers.map((i) => i.buf)]);
  fs.writeFileSync(outputPath, fullIco);
}

async function run() {
  console.log("[favicons] Generating SEO-compliant square favicons & site logos...");

  // 1. Multi-resolution true ICO file (16x16, 32x32, 48x48)
  await createIco([16, 32, 48], srcFavicon, path.join(publicDir, "favicon.ico"));
  console.log("  ✓ public/favicon.ico (multi-res 16, 32, 48)");

  // 2. High-res square master PNG (512x512)
  await sharp(srcFavicon)
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon.png"));
  console.log("  ✓ public/favicon.png (512x512 square)");

  // 3. Google Search recommended 48x48 square PNG
  await sharp(srcFavicon)
    .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon-48x48.png"));
  console.log("  ✓ public/favicon-48x48.png (48x48 square)");

  // 4. Google / High-DPI 96x96 square PNG
  await sharp(srcFavicon)
    .resize(96, 96, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon-96x96.png"));
  console.log("  ✓ public/favicon-96x96.png (96x96 square)");

  // 5. Android / Chrome PWA 192x192 square PNG
  await sharp(srcFavicon)
    .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "favicon-192x192.png"));
  console.log("  ✓ public/favicon-192x192.png (192x192 square)");

  // 6. Apple Touch Icon 180x180 square PNG
  await sharp(srcFavicon)
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  console.log("  ✓ public/apple-touch-icon.png (180x180 square)");

  // 7. Site Logos for Search Engines (Schema.org Organization logo & WebSite)
  fs.copyFileSync(srcLogo, path.join(publicDir, "callisto_final_Logo.png"));
  fs.copyFileSync(srcLogo, path.join(publicDir, "logo.png"));
  console.log("  ✓ public/logo.png & public/callisto_final_Logo.png");

  // 8. Square Logo for Knowledge Graph / Organization Logo
  await sharp(srcLogo)
    .resize(512, 512, { fit: "contain", background: { r: 23, g: 24, b: 23, alpha: 1 } }) // Callisto brand dark background #171817
    .png()
    .toFile(path.join(publicDir, "logo-square.png"));
  console.log("  ✓ public/logo-square.png (512x512 square brand logo)");

  console.log("[favicons] Generation completed successfully!");
}

run().catch((err) => {
  console.error("[favicons] Error:", err);
  process.exit(1);
});
