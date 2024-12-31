const express = require('express')
const app = express()
const port = 3000

let products = [
    { id: 101, name: 'Football', price: 30 },
    { id: 202, name: 'Basketball', price: 25 },
    { id: 303, name: 'Baseball', price: 12 },
  ]

  app.get('/', (req, res) => {
    res.send('Welcome to the Product API!');
  })

  app.get('/products', (req, res) => {
    res.json(products)
  })

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })