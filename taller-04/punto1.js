const express = require('express');
const fs = require('fs');
const app = express();

let  = datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.get('/users/hobby', (request, response) => {
    const { hobby } = request.query;
    const resultado = datos.filter(user => user.hobbies.includes(hobby));
    response.json(resultado);
  });

  app.listen(3001, () => console.log('Punto 1: http://localhost:3001/users/hobby?hobby=tiktok')); 