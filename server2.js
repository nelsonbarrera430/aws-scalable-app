const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/instance', (req, res) => {
  const hostname = os.hostname() + '-3001';
  res.json({ instance: hostname });
});

app.listen(port, () => {
  console.log(`Servidor 2 corriendo en http://localhost:${port}`);
});
