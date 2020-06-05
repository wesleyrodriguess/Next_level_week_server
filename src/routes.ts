import express from 'express';
import Knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
   const items = await Knex('items').select('*');

   const serializadItems = items.map(item => {
       return{
           title: item.title,
           image_url: `http://localhost:3333/tmp/${item.image}`,
       };
   });

    return response.json(serializadItems);

}); 

export default routes;