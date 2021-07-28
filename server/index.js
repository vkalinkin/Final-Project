require('dotenv/config');
const pg = require('pg');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const jsonMiddleware = express.json();
const staticMiddleware = require('./static-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);
app.use(jsonMiddleware);

app.get('/api/list', (req, res) => {
  const sql = `
  select
    "gameID", "currentPrice", "dealID", "userID", "storeID", "gameImage", "favoriteID", "gameTitle"
  from "favorites"
  join "users" using ("userID");
  `;

  db.query(sql)
    .then(result => {
      // console.log('DB Result:', result);

      // res.json({ list: 'This is a test!' });

      const list = result.rows;
      res.json(list);
      // console.log("My list:", list);
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
