const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = './images';

async function compressImages() {
  const files = fs.readdirSync(imageDir).filter(f => /\.(jpg|jpeg)$/i.test(f));

  console.log(`Found ${files.length} JPEG files to compress\n`);

  for (const file of files) {
    const filepath = path.join(imageDir, file);
    const stat = fs.statSync(filepath);
    const originalSize = stat.size;

    try {
      await sharp(filepath)
        .jpeg({ quality: 75, progressive: true })
        .toFile(filepath + '.tmp');

      fs.renameSync(filepath + '.tmp', filepath);

      const newStat = fs.statSync(filepath);
      const newSize = newStat.size;
      const reduction = Math.round((1 - newSize / originalSize) * 100);

      console.log(`${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
    } catch (e) {
      console.error(`Error processing ${file}:`, e.message);
    }
  }
}

compressImages();
