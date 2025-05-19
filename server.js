const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/instance', (req, res) => {
  const hostname = os.hostname() + '-3000';
  res.json({ instance: hostname });
});

app.listen(port, () => {
  console.log(`Servidor 1 corriendo en http://localhost:${port}`);
});
