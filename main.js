// Se puede solo extraer lo que necesitemos
const { myArray, myNumber, myWebAdress, user } = require("./module/myModule");
const { add, subtract, multiply, divide } = require("./math/index");

console.log(myArray);
console.log(myNumber);
console.log(myWebAdress);
console.log(user);

console.log(add(10, 20));
console.log(subtract(10, 20));
console.log(divide(10, 20));
console.log(multiply(10, 20));
