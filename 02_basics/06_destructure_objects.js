const personOne ={
    nickname: 'Abhi',
    age:26,
    address: {
        city : "Somewhere",
        state : "One of them"
    }
}
    
const personTwo ={
    nickname: 'Bawa',
    age:30,
    address: {
        city : "Somewhere else",
        state : "Another one of them"
    }
}

const {nickname : nameTwo,age : ageTwo} =personTwo; // position not impt unlike arrays. It's all about keys

console.log(`${nameTwo} is ${ageTwo} years old`);

// we can also de-construct the nested object

const {address:{city}}= personOne;
console.log(city);