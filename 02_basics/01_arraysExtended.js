//slice() and splice()
/*
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.

SLICE does NOT change the ORIGINAL array
SPLICE changes the original array

importnt to know what the arguments mean in both the cases
*/

//1 slice()

const listOfCars = new Array("Mercedes","Lambo", "Alto", "Porsche", "Bolero")
// console.log(listOfCars.slice(0,5));    
// console.log(listOfCars.slice(0,4));    
// console.log(listOfCars.slice(1,3));    

// console.log(listOfCars.slice(0));    

// console.log(listOfCars.slice(-2));    // prints last two elements
// console.log(listOfCars.slice(-4));    // prints last four elements
// console.log(listOfCars.slice(-5));    // prints last five elements , basically the entire array




//++++++++++++++++++++++++ splice() ++++++++++++++++++++++++++++++

//splice(start,deleteCount, item-0...item-n)
//splice() returns an array of deleted elements if any
//changes made to original array are reflected.

console.log(listOfCars);
//console.log(listOfCars.splice(1,2,"Swift", "Fortuner"));
//console.log(listOfCars.splice(1,2,"Swift", "Fortuner"));
console.log(listOfCars.splice(1,0,"Swift", "Fortuner"));
console.log(listOfCars);