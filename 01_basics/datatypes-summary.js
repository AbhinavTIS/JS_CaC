/*Primitive vs Non-Primitive

#Primitive (CallBy) 

=> string, number ,  Boolean, null , undefined, Symbol , BigInt  --> STACK MEMORY

#Non-primitive (Reference)

=> Arrays, Objects, Functions --> HEAP MEMORY


*/
// const id= Symbol('123')
// const anotherId = Symbol('123')

// console.log(id==anotherId);


const bigNumber= 121212121212121212121212121212n
console.log(typeof bigNumber);

// Stack for Primitive (Copy)
// Heap for Non-Primitive