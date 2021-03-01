import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usúario');

  response.json([
    'Vagner',
    'Santos',
    'logo'
  ]);
});

app.listen(3333);