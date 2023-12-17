// File: server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.get('/convertFtoC', (req, res) => {
  const fahrenheit = parseFloat(req.query.fahrenheit);
  const celsius = (fahrenheit - 32) * 5 / 9;
  res.send({ result: celsius.toFixed(2) + ' °C' });
});

app.get('/convertCtoF', (req, res) => {
  const celsius = parseFloat(req.query.celsius);
  const fahrenheit = (celsius * 9 / 5) + 32;
  res.send({ result: fahrenheit.toFixed(2) + ' °F' });
});

const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
