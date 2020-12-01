const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// import routes
const productRouter = require('./routes/product');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// route product
app.use('/product', productRouter);

app.listen(port, console.log('listening on port', port));