const { readFile } = require('fs/promises');

// const { promisify } = require('util');
// const readFilePromise = promisify(readFile);

// * Promises
/*
const getText = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
*/

// * Then & Catch
/*
getText('./data/second.txt')
  .then((result) => {
    console.log(result);
  })
  .then(() => {
    return getText('./data/third.txt');
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
*/

// * Async & Await
const read = async () => {
  try {
    // throw new Error('Este es un error que no se esperaba');
    const result2 = await readFile('./data/second.txt', 'utf-8');
    const result = await readFile('./data/first.txt', 'utf-8');
    const result3 = await readFile('./data/third.txt', 'utf-8');

    console.log(result);
    console.log(result2);
    console.log(result3);
  } catch (error) {
    console.log(error);
  }
};

read();
