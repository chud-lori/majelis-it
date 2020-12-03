const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// import routes
const productRouter = require('./routes/product');

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// route product
app.use('/product', productRouter);

// route root
app.get('/', (req, res) => {
  res.json({ data: 'Welcome' });
});

app.listen(port, console.log('listening on port', port));
