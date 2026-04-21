import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const srcDir = path.join(root, 'src', 'assets', 'brand')
const outDir = path.join(srcDir, 'optimized')

const tasks = [
  {
    file: 'logo.png',
    outputBase: 'logo',
    widths: [64, 96, 128, 160],
    quality: 78,
  },
  {
    file: '1.png',
    outputBase: 'poster-1',
    widths: [480, 768, 1200],
    quality: 72,
  },
  {
    file: '2.png',
    outputBase: 'poster-2',
    widths: [480, 768, 1200],
    quality: 72,
  },
]

async function optimizeImage(task) {
  const input = path.join(srcDir, task.file)
  for (const width of task.widths) {
    const output = path.join(outDir, `${task.outputBase}-${width}.webp`)
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: task.quality, effort: 6 })
      .toFile(output)
  }
}

async function main() {
  await fs.mkdir(outDir, { recursive: true })
  await Promise.all(tasks.map(optimizeImage))
  console.log('Optimized images generated in src/assets/brand/optimized')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
