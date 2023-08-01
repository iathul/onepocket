// Task 1

require('dotenv').config()
let express = require('express')
let app = express()

// Route
app.get('/', (req, res) => {
  res.send('<h3> <center> Hello  World </center> </h3>')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}`)
})
