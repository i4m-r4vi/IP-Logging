const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const interfaces = os.networkInterfaces();
  const ip = [];

  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ip.push(iface.address);
      }
    }
  }

  if (ip.length === 0) {
    return res.json({ message: 'No local IP addresses found' });
  }

  console.log({ localIPs: ip });
  res.status(200).send("Welcome")
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
