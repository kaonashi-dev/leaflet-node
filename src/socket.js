module.exports = (io) => {
   io.on('connection', (socket) => {
      console.log('nuevo usuario conectado');

      socket.on('userLocation', (data) => {
         console.log('usuario', data);
         socket.broadcast.emit('newUserLocation', data)
      });

      socket.on('disconnect', function () {

         console.log('desconectado');
         socket.emit('disconnected');

      });
   });
}