const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
})

app.listen(5000, () => {
  console.log('Listening on PORT: 5000')
})