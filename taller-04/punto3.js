const express = require('express');
const fs = require('fs');
const app = express();

let datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.get('/users/hobby/count', (request, response) => {
  const { hobby } = request.query;
  const count = datos.filter(user => user.hobbies.includes(hobby)).length;
  response.json({ cantidad: count });
});

app.listen(3003, () => console.log('Punto 3: http://localhost:3003/users/hobby/count?hobby=programar'));
