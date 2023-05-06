const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000;

app.use(cors())


const chefs = require('./data/chef.json')

app.get('/', (req, res) => {
  res.send('server is running...')
})

app.get('/allData', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})