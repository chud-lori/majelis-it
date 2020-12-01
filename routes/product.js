const router = require('express').Router();
const data = require('../database').products;

// get all products
router.get('/', (req, res) => {
  // return all data
  res.status(200).json({
    data,
  });
});

// get single product
router.get('/:id', (req, res) => {
  // find data if exist return true, otherwise return false
  const product = data.find((val) => val.id === parseInt(req.params.id, 10));
  //   if not exist, throw 404
  if (!product) return res.status(404).json({ error: 'not found' });
  // return data
  res.status(200).json(product);
});

// add product
router.post('/', (req, res) => {
  //   create new id
  const id = data[data.length - 1].id + 1;
  const newData = {
    id,
    name: req.body.name,
    stock: req.body.stock,
  };
  //   push data to products
  data.push(newData);
  res.status(200).json({ data: newData });
});

// edit product
router.patch('/:id', (req, res) => {
  // find data if exist return true, otherwise return false
  const product = data.find((val) => val.id === parseInt(req.params.id, 10));
  // if not exist, throw 404
  if (!product) return res.status(404).json({ error: 'not found' });
  // update data
  product.name = req.body.name;
  product.stock = req.body.stock;
  // return updated data
  res.json(product);
});

// delete product
router.delete('/:id', (req, res) => {
  const product = data.find((val) => val.id === parseInt(req.params.id, 10));
  res.send(product);
});

module.exports = router;
