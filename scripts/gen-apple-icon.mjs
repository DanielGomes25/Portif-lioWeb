import sharp from 'sharp';

const input = 'public/favicon-256.svg';
const output = 'public/apple-touch-icon.png';

try {
  await sharp(input)
    .resize(180, 180, { fit: 'cover' })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
  console.log(`Generated: ${output}`);
} catch (err) {
  console.error('Failed to generate apple-touch icon:', err);
  process.exit(1);
}

