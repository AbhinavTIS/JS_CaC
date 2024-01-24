// combining Objects

const sedan = {
    1: "BMW M",
    2: "Honda Civic",
    3: "Toyota Corolla"
}

const suv = {
    4: "Fortuner",
    5: "Atlas",
}

// trying to combine unsuccessfully
// cars = {sedan,suv};
// console.log(cars); it returns an object with two objects where keys are object names

//Correct method
//Syntax : Object.assign(target object, source1,source2....., sourceN)
// cars = Object.assign({},sedan,suv);
// console.log(cars);

//We will mostly use spread operator tho

const cars= {...sedan,...suv}
console.log(cars); 


// FEW OBJECT METHODS


const user = {
    id: 1,
    name : "Shila",
    age : 30,
    isLoggedIn : true
}

console.log(Object.keys(user)); //  returns an array with keys
console.log(Object.values(user)); // returns an array with values
console.log(Object.entries(user)); //  returns an array with arrays of key-value pairs

console.log(user.hasOwnProperty("isLoggedIn"));
console.log(user.hasOwnProperty("accountStatus"));
