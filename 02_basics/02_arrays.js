//MORE ARRAY METHODS

const teachers = ["Jatinder", "Hartinder", "Harry" , "Hitesh"]
const tapuSena = ["Pinku", "Tapu", "Sonu","Goli", "Gogi"]

//teachers.push(tapuSena); // this will just push an array as an element (NOT merge) 
// concat() will do the job


// const newArr = teachers.concat(tapuSena)

// console.log(newArr);

/* SPREAD OPERATOR ... 
...array_name breaks it into its elements
*/
const comboArray = [...teachers,...tapuSena]
console.log(comboArray);

const weirdArray = [1,2,3,[4,5,6],7 , [6,7,[8,9]]];
const usableWeirdArray = weirdArray.flat(Infinity) // flattens the entire nested array
console.log(usableWeirdArray);

 console.log(typeof(usableWeirdArray));

