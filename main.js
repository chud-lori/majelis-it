const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

// /product (GET)
app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data product ss',
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
// app.listen(5000, function () {
//   console.log('listening on port 5000');
// });
