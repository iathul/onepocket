// Task 3

const fs = require('fs')
const util = require('util')
const readFileAsync = util.promisify(fs.readFile)

const filePath = `${__dirname}/data.txt`

async function countWords() {
  try {
    const data = await readFileAsync(filePath, 'utf8')
    const stringArray = data.split(' ')
    const wordsCount = stringArray.length
    console.log(`Words count is - ${wordsCount}`)
  } catch (err) {
    console.error(err)
  }
}

countWords()
