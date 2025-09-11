import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories containing images to convert
const directories = [
  path.join(__dirname, '../public/projects'),
  path.join(__dirname, '../public/diplomas')
];

// Also convert the profile photo
const singleFiles = [
  path.join(__dirname, '../public/profile-photo.jpg')
];

// Process all images in directories
directories.forEach(directory => {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directory}: ${err}`);
      return;
    }

    files.forEach(file => {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const inputPath = path.join(directory, file);
        const outputPath = path.join(directory, `${path.parse(file).name}.webp`);
        
        convertToWebP(inputPath, outputPath);
      }
    });
  });
});

// Process single files
singleFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    const outputPath = filePath.replace(/\.(jpg|jpeg)$/i, '.webp');
    convertToWebP(filePath, outputPath);
  } else {
    console.error(`File not found: ${filePath}`);
  }
});

// Function to convert images to WebP
function convertToWebP(inputPath, outputPath) {
  sharp(inputPath)
    .webp({ quality: 80 }) // Adjust quality as needed (0-100)
    .toFile(outputPath)
    .then(() => {
      console.log(`Successfully converted: ${inputPath} -> ${outputPath}`);
    })
    .catch(err => {
      console.error(`Error converting ${inputPath}: ${err}`);
    });
}
