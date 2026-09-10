const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, '..', 'src', 'assets', 'brands');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const logos = [
  { name: 'greenply.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Greenply_Logo.svg' },
  { name: 'hettich.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Hettich_Logo.svg' },
  { name: 'pidilite.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Pidilite_logo.svg' },
  { name: 'hafele.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/H%C3%A4fele_logo.svg' },
  { name: 'blum.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Blum_logo.svg' },
  { name: 'asianpaints.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Asian_Paints_logo.svg' },
  { name: 'centuryply.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Century_Plyboards_Logo.svg' },
  { name: 'saintgobain.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Saint-Gobain_logo.svg' },
  { name: 'kajaria.png', url: 'https://upload.wikimedia.org/wikipedia/en/1/11/Kajaria_Ceramics_logo.png' },
  { name: 'kohler.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Kohler_Co_logo.svg' },
  { name: 'marshalls.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Marshalls_plc_logo.svg' },
  { name: 'merino.svg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Merino_Group_logo.svg' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    });
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const item of logos) {
    const dest = path.join(dir, item.name);
    console.log(`Downloading ${item.name}...`);
    try {
      await download(item.url, dest);
      console.log(`Saved ${item.name}`);
    } catch (e) {
      console.error(`Failed ${item.name}`, e.message);
    }
  }
}

main();
