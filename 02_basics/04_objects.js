//creating object using constructor (Singleton object)

const tinderUser = new Object()
//console.log(tinderUser);

tinderUser.id = "123.abc"
tinderUser.name = "Raghav Chadha"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

//Nested Objects

const regularUser ={
    email : "sushant@gmail.com",
    age: 26,
    
    fullName : 
    {
        firstName : "Sushant",
        lastName :  "Arora"
    }
}

console.log(regularUser.email);
console.log(typeof regularUser)
console.log(regularUser.fullName.lastName)
console.log(typeof regularUser.fullName.lastName);