const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// middleware
// const mid = (req, res, next) => {
//   console.log('test');
//   next();
// };
app.use(express.urlencoded({ extended: false }));

const products = [
  {
    id: 1,
    name: 'Sedap',
    stock: 100,
  },
  {
    id: 2,
    name: 'Indomie',
    stock: 120,
  },
];

// Index page
app.get('/', (req, res) => {
  res.status(200).send('Ini rest');
});

// All product (GET)
app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data product',
    data: products,
  });
});

// Single product (GET)
app.get('/product/:id', (req, res) => {
  // some() return boolean
  const found = products.some((val) => val.id === parseInt(req.params.id, 10));
  console.log(found);
  if (!found) {
    return res.status(404).json({
      message: 'product not found',
    });
  }

  // find() return value
  const product = products.find((element) => element.id === parseInt(req.params.id, 10));
  console.log(product);
  res.status(200).json({
    data: product,
  });
});

// Store product (POST)
app.post('/product', (req, res) => {
  const newData = {
    id: Date.now(),
    name: req.body.name,
    stock: req.body.stock,
  };
  console.log(newData);

  products.push(newData);

  res.status(200).json({
    message: 'product added',
    data: newData,
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));

// app.listen(5000, function () {
//   console.log('listening on port 5000');
// });

module.exports = app;
