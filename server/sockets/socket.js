const { io } = require("../server");

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la app'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     // el callback se puede llamr equis cantidad de veces tener cuidado de cuantas veces se llama
        //     callback({
        //         resp: 'todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salió mal!!!'
        //     });
        // }
    })

});