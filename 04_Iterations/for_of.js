// Arrays
const arr = [1,2,3,4,5]

for (const iterator of arr) {

    console.log(iterator);
    
}

//Strings
const greeting = "Hello world !"

for (const greet of greeting) {
    console.log(greet);
}

//Maps

const map= new Map()
map.set('IN' , "India")
map.set('USA' , "America")
map.set('FR' , "France")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':--', value );
}