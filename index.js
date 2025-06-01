const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const interfaces = os.networkInterfaces();
  const ip = [];

  console.log(interfaces['Wi-Fi'])

  res.status(200).send("Welcome")
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
