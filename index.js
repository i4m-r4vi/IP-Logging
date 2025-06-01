const express = require('express');
const app = express();

app.use((req, res, next) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`New connection from IP: ${ip}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, your IP is being logged!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
