const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const router = express.Router();
routes(router);
app.use('/api/v1', router);

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('listening on port 3000: http://localhost:3000');
});

module.exports = app;