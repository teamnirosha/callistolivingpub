import fs from "node:fs";
import path from "node:path";
import { createJiti } from "jiti";

const jiti = createJiti(process.cwd());
const { PROJECTS } = jiti("./src/lib/projects.ts");
const { LOCATIONS } = jiti("./src/lib/locations.ts");

const BASE_URL = "https://www.callistoliving.in";

const staticUrls = [
  `${BASE_URL}/`,
  `${BASE_URL}/gallery`,
];

const projectUrls = PROJECTS.map((p) => `${BASE_URL}/projects/${p.slug}`);

// Only include published locations in the sitemap
const locationUrls = LOCATIONS
  .filter((loc) => loc.published)
  .map((loc) => `${BASE_URL}/locations/${loc.slug}`);

const allUrls = [...staticUrls, ...projectUrls, ...locationUrls];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`).join("\n")}
</urlset>
`;

const outputPath = path.resolve("public/sitemap.xml");
fs.writeFileSync(outputPath, sitemapXml, "utf-8");
console.log(`[sitemap] Successfully generated sitemap with ${allUrls.length} verified URLs at ${outputPath}`);
