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
  // console.log(req.body);
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
      // console.log(req.body);
      const list = result.rows;
      res.json(list);
      // console.log("My list:", list);
    });
});

app.post('/api/add', (req, res) => {
  // console.log(req.body);
  const sql = `
  insert into "favorites"
  ("gameImage", "gameTitle", "currentPrice", "storeID", "dealID", "gameID", "userID")
  values ($1, $2, $3, $4, $5, $6, $7)
  returning * ;
  `;
  // const params = [gameImage, gameTitle, currentPrice, storeID, storeID, dealID, gameID, userID]
  const params = [req.body.gameImage, req.body.gameTitle, req.body.currentPrice, req.body.storeID, req.body.dealID, req.body.gameID, req.body.userID];

  db.query(sql, params)
    .then(result => {
      // console.log(req.body);
      const list = result.rows;
      res.json(list);
    });
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
