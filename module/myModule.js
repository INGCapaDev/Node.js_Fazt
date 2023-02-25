const mySecretVariable = "anonymous";

const myWebAdress = "faztweb.com";
const myNumber = 30;
const myArray = [10, 20, 30];

const user = {
  name: "Alvaro",
  lastname: "Capaceta",
};

/* Forma utilizando una constante
const group = {
  myWebAdress: myWebAdress,
  myNumber: myNumber,
  myArray: myArray,
  user: user,
};
module.exports = group;
*/

/* Forma sin utilizar constante
module.exports = {
  myWebAdress: myWebAdress,
  myNumber: myNumber,
  myArray: myArray,
  user: user,
};
*/

/* Forma mas simple de crear el objeto
module.exports = {
  myWebAdress,
  myNumber,
  myArray,
  user,
};
*/

// Otra forma
module.exports.user = user;
module.exports.myArray = myArray;
module.exports.myWebAdress = myWebAdress;
module.exports.myNumber = myNumber;
