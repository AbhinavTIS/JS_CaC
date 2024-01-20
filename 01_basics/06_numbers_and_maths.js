//+++++++++++++++++++++++++++++++++++++++Numbers+++++++++++++++++++++++++++

const accountNo = 43344;

let balance = new Number(140000) // explicitly mentioning the type
// console.log(balance); // displays differenly than implicit number type 

//toString()
let balance_string = balance.toString();
// console.log(`Length of ${balance_string} is ${balance_string.length}`)

//toFixed() and toPrecision()
let price = 145.50;
// console.log(price.toFixed(5));
// console.log(price.toFixed(8));
// console.log(price.toFixed(4));
// console.log(price.toFixed(3));
// console.log(price.toFixed(2));

// console.log(price.toPrecision(5));
// console.log(price.toPrecision(8));
// console.log(price.toPrecision(4));
// console.log(price.toPrecision(3));
// console.log(price.toPrecision(2));


//++++++++++++++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++++++++++++++++++++++++

const number1 = 459
const number2 = -452 
console.log(Math.abs(number2)) 

// Math.ceil() Math.floor()
// Math.random() --> Will cover later
// Math.abs()