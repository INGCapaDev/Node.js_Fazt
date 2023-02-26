// * SOLO ERA PARA CREAR EL ARCHIVO DE GRAN PESO
/*
const { writeFile } = require('fs/promises');

const createBigFile = async () => {
  await writeFile('./data/bigFile.txt', 'hello world'.repeat(1000000));
};

 createBigFile();
*/

// * Streams

const { createReadStream } = require('fs');

const stream = createReadStream('./data/bigFile.txt', { encoding: 'utf-8' });

stream.on('data', (chunk) => {
  console.log(chunk);
});

stream.on('end', (chunk) => {
  console.log('He terminado de leer el archivo');
});

stream.on('error', (error) => {
  console.log(error);
});