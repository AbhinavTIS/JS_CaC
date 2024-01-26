
const user ={
    username : "Abhinav",
    price : 199 
}

function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

// object can be directly passed by creating at the time of function call