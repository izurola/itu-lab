const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.post('/selectFruit', (req, res) => {
    fruits;
  res.json({ fruits });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
