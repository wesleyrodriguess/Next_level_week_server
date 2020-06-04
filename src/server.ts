import express from 'express';

 const app = express();

 app.get('/users', (request, response) => {
     console.log('Listagem de usuários');
     
     response.json([
         'Wesley',
         'Silva',
         'Rodrigues',
         'Rodrigues'
     ]);
 });

 app.listen(3333);