/**
 * Resize raw PNGs in public/images/raw → WebP in public/images/
 * Sizes: xs 414, sm 768, md 1280, lg 1920
 */
import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, basename, extname, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const RAW_DIR = join(__dirname, '../public/images/raw')
const OUT_DIR = join(__dirname, '../public/images')

const SIZES = [
  { suffix: '-xs',  width: 414,  quality: 80 },
  { suffix: '-sm',  width: 768,  quality: 82 },
  { suffix: '-md',  width: 1280, quality: 82 },
  { suffix: '-lg',  width: 1920, quality: 84 },
]

const files = await readdir(RAW_DIR)
const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f) && !f.includes('_thumb'))

console.log(`\nProcessing ${images.length} images → WebP\n`)

for (const file of images) {
  const base = basename(file, extname(file))
  const inputPath = join(RAW_DIR, file)

  for (const { suffix, width, quality } of SIZES) {
    const outPath = join(OUT_DIR, `${base}${suffix}.webp`)
    try {
      await sharp(inputPath)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality })
        .toFile(outPath)
      console.log(`  ✓ ${base}${suffix}.webp`)
    } catch (err) {
      console.error(`  ✗ ${base}${suffix}.webp: ${err.message}`)
    }
  }
}

console.log('\n✓ All done.\n')
