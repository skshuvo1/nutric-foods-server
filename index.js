const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000;

app.use(cors())


const chefs = require('./data/chef.json')
// console.log(chefs);


app.get('/', (req, res) => {
  res.send('server is running...')
})
app.get('/allData/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const singleData = chefs.find(p => p.id === id);
  
res.send(singleData)
})

app.get('/allData', (req, res) => {
  res.send(chefs)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})