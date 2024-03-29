require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());// parse requests of content-type - application/json
const router = require(path.join(__dirname, 'app', 'routes.js'));

router(app);

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.listen(process.env.PORT_HTTP, () => {
  if (process.env.APP_ENV == 'dev') {
    console.log(`Server is running on ${process.env.HTTP_SERVER}`);
  }
});


