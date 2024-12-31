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

  /* app.get('/products/:productId', (req, res) => {
    const productId = parseInt(req.params.productId, 10)
    const product = products.find(p => p.id === productId) */

    app.get('/products/:productName', (req, res) => {
      const productName = req.params.productName.toLowerCase()
      const product = products.find(p => p.name.toLowerCase() === productName)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ error: 'Product not found!' })
    }
  })

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  })