const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Everything is fine 👍');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
