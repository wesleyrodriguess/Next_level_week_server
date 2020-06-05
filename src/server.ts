import express, { request, response } from 'express';

import path from 'path';
import routes from './routes';

 const app = express();

 app.use(express.json()); 
 app.use(routes);
 app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));

 app.listen(3333);

 /*app.get('/users/:id', (request, response)=> {
     const id = Number(request.params.id);

     const user = users[id];

     return response.json(user);
 });

 app.post('/users', (request, response)=>{
    const data = request.body;

    console.log(data);
     const user = {
         name: data.name,
         email: data.email
     };

     return response.json(user);
 });*/