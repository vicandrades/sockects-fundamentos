var socket = io();
//los on escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconect', function() {
    console.log('perdimos conexion con el servidor');
});

//emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'victor',
    mensaje: 'hola mundo'
}, (resp) => {
    //console.log('se disparo el callback');
    console.log('respuesta server: ', resp);
});

socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
});