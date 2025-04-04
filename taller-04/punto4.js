const express = require('express');
const fs = require('fs');
const app = express();

let datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.get('/users/is-free', (request, response) => {
  const resultado = datos.filter(user => user.hobbies.length < 3);
  response.json(resultado);
});

app.listen(3004, () => console.log('Punto 4: http://localhost:3004/users/is-free'));
