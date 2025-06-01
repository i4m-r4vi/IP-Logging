const express = require('express');
const app = express();


app.use((req, res, next) => {
  const ip = req.ip;
  console.log(`New connection from IP: ${ip}`);
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Welcome to IP Logging</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
