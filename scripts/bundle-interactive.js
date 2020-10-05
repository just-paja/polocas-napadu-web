const {
  promises: { mkdir, rename }
} = require('fs')
const path = require('path')

const distPath = path.join(__dirname, '..', 'dist')
const interactivePath = path.join(distPath, 'interactive')

async function createInteractiveBundle () {
  await mkdir(interactivePath, { recursive: true })
  await rename(
    path.join(distPath, 'polocas-napadu-match-inspirations', 'build'),
    path.join(interactivePath, 'inspirations')
  )
  await rename(
    path.join(distPath, 'polocas-napadu-match-referee', 'build'),
    path.join(interactivePath, 'referee')
  )
  await rename(
    path.join(distPath, 'polocas-napadu-match-scoreboard', 'build'),
    path.join(interactivePath, 'scoreboard')
  )
}

async function main () {
  try {
    await createInteractiveBundle()
  } catch (e) {
    console.error(e)
    process.exit(255)
  }
}

main()
