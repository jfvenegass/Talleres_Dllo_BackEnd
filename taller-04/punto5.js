const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

let datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.post('/users/suggest', (request, response) => {
  const { codigo, hobby } = request.body;
  const user = datos.find(u => u.codigo === codigo);

  if (!user) return response.status(404).json({ mensaje: "Usuario inexstinte" });

  if (user.hobbies.length < 3) {
    user.hobbies.push(hobby);
    response.json({ mensaje: "Hobby añadido", usuario: user });
  } else {
    response.json({ mensaje: "No se pueden añadir más hobbies" });
  }
});

app.listen(3005, () => {
  console.log('Punto 5: http://localhost:3005/users/suggest');
  console.log('JSON de prueba: { "codigo": "200154252", "hobby": "Rankear" }');
});
