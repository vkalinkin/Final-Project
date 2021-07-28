require('dotenv/config');
// const pg = require('pg');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const jsonMiddleware = express.json();
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);

app.use(jsonMiddleware);

app.get('/api/list', (req, res) => {
  res.json({ list: 'This is a test!' });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
