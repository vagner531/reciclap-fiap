import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ mensage: 'Hello Word' });
});

export default routes;