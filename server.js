const express = require('express');

const api = require('./api');
const front = require('./front');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));

app.use('/api', api.api).use('/', front.index).listen(port);
