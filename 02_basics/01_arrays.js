// const numArray = [1,4,2,10,9]
// console.log(numArray); 

// const mixArray = [true, "blue", 102, "kratos"] //mixed array
// console.log(mixArray);
// console.log(`data type of first element of mixArray is ${typeof(mixArray[0])}`); //confirming the type 

// let anotherArray = new Array(1,4,5,3,1); // second way to declare an array
// console.log(anotherArray);


// ARRAY METHODS

const heroes = ["John Cena", "The Undertaker", "Rey Mysterio", "Triple H", "RKO"]

console.log(heroes.pop()); // returns the popped element
console.log(heroes);

console.log(heroes.push("Goldberg")); // returns the index of added element
console.log(heroes);

// shift and unshift work like pop nand push except the elements are added and removed at the 
// starting index.

// includes() -- returns boolean
//indexOf() -- returns the index if present or -1

//join
const arrString = heroes.join();
console.log(arrString + " : " +  typeof(arrString));



