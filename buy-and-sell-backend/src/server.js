import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;
const start = async() =>{
    server= Hapi.server({
        port: 8100,
        host: 'localhost',
    });

   routes.forEach(route =>server.route(route));

   db.connect(); 
   await server.start();
    console.log(`Server is listening on ${server.info.uri}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

process.on('SIGINT',async ()=>{
    console.log('stopping server....');

    await server.stop({timeout: 10000});
    db.end();
    console.log('Server stoped');
    process.exit(0);

});

start();
