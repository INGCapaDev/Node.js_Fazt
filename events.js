const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// * Escuchar un evento en este caso response
// ! response es solo un nombre puede llamarse como sea
customEmitter.on('response', (data, secondData) => {
  console.log('received');
  console.log(data);
  console.log(secondData);
});

customEmitter.emit('response', 'Hello world', 'INGCapaDev');
/*
customEmitter.emit('response', 30);
customEmitter.emit('response', [1, 2, 3]);
customEmitter.emit('response', { name: 'Alvaro', lastname: 'Capaceta' });
*/
