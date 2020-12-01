// middleware
// const mid = (req, res, next) => {
//   console.log('test');
//   next();
// };

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

const api = {
  index: (req, res) => {
    res.status(200).send('Ini Test');
  },
  products: (req, res) => {
    res.status(200).json({
      message: 'Data product',
      data: products,
    });
  },
};

// /product/:id (GET)
// app.get('/product', (req, res) => {});

// app.listen(5000, function () {
//   console.log('listening on port 5000');
// });

module.exports = api;
