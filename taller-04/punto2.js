const express = require('express');
const fs = require('fs');
const app = express();

let datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.get('/users/exists', (request, response) => {
  const { codigo } = request.query;
  const existe = datos.some(user => user.codigo === codigo);
  response.json({ existe });
});

app.listen(3002, () => console.log('Punto 2: http://localhost:3002/users/exists?codigo=200123430'));
