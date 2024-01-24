const user=  {
                name: "Raghav",
                age: 28,
                location: "Brampton",
                email: "raghav@levels.com",
                isLoggedin : false,
                lastLoginDays: ["Monday", "Tuesday"],

                
            }

            //Accessing object properies
// console.log(user.email);            // normal method
console.log(user["email"]);           // better method

            //Changing object properties
user["email"] = "raghav@gmail.com";

console.log(user);

// if you want your object to not be changed used, Object.freeze() static method
// Object.freeze(user)

// user.age=30

// console.log(user.age); // will still display old age  
user.greeting = function(){

    console.log("Hellow I am a user");
}

console.log(user.greeting());
