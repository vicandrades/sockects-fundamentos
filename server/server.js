const express = require('express');
//socketIO no trabaja directamente con express sino con http que es un paquete propio de node
const socketIO = require('socket.io');

//para poder usar socketIo se debe crear un server de http y para poder usarlo con express se le pasa como valor 
// la aplicacion de express 'app' previamente inicializada
// server es el servidor que va a estar corriendo pero va a poder usar las configuraciones de app
//por eso el listen se hace con server y no con app 
// ===============================================
// configuracion socket para trabajar con express
// ===============================================
const http = require('http');
const app = express();
let server = http.createServer(app);


const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//para incializar el socketIO se usa el server creado con http ya que es con quien trabaja socketIO
// IO = Input/Output esta es la comunicacion directa del backend
module.exports.io = socketIO(server);
require('./sockets/socket');



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});