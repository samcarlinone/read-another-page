const fs = require('fs')
const glob = require('glob')
const sharp = require('sharp')

const COVERS_PATH = './covers/'
const OUTPUT_PATH = './dist/images/'

const WIDTH = 340
const HEIGHT = 480

const SCALES = [
  1,
  1.5,
  2,
]

fs.promises.mkdir(OUTPUT_PATH, {recursive: true})
  .then(() => {
    glob('*.jpg', {cwd: COVERS_PATH}, (err, files) => {
      if (err) throw err
    
      files.map(async (path) => {
        const name = path.replace(/(-main|-cover)?.jpg$/, '')

        const base = sharp(`${COVERS_PATH}${path}`)
          .removeAlpha()

        if (!path.includes('-cover.jpg'))
          base.toFile(`${OUTPUT_PATH}${name}.jpg`)

        if (!path.includes('-main.jpg')) {
          SCALES.forEach(scale => {
            const resized = base
              .resize({
                width: WIDTH * scale,
                height: HEIGHT * scale,
                fit: sharp.fit.cover,
                position: sharp.strategy.entropy
              })
              
            resized
              .webp()
              .toFile(`${OUTPUT_PATH}${name}-cover-${scale}x.webp`)

            resized
              .jpeg()
              .toFile(`${OUTPUT_PATH}${name}-cover-${scale}x.jpg`)
          })
        }
      })
    })
  })
