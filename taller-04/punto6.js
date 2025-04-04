const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

let datos = JSON.parse(fs.readFileSync('./24-taller-04-datos.json', 'utf8'));

app.post('/users', (request, response) => {
  const nuevoUsuario = request.body;

  if (!nuevoUsuario.codigo || !nuevoUsuario.nombre || !nuevoUsuario.apellido || !Array.isArray(nuevoUsuario.hobbies) || nuevoUsuario.hobbies.length < 2) {
    return response.status(400).json({ mensaje: "insuficientes información" });
  }

  if (datos.some(u => u.codigo === nuevoUsuario.codigo)) {
    return response.status(400).json({ mensaje: "Usuario existente" });
  }

  datos.push(nuevoUsuario);
  response.status(201).json({ mensaje: "Resgitro exitoso", usuario: nuevoUsuario });
});

app.listen(3006, () => {
  console.log('Punto 6: http://localhost:3006/users');
  console.log('JSON de prueba:\n', JSON.stringify({
    codigo: "200171902",
    nombre: "Edison",
    apellido: "Pacheco",
    hobbies: ["estudiar", "carnavalear", "ir a cine"]
  }, null, 2));
});
