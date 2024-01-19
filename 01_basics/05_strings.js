const username = 'Abhinav';
var userID = 500230044;


//console.log(username + " : " + userID);
console.log(`User ID of ${username} is ${userID}`);


const gameName = new String("AbhinavPro");

//    console.log(gameName[1]);
//    console.log(gameName.length);
//    console.log(gameName.toUpperCase());
//    console.log(gameName.charAt(2));
//    console.log(gameName.indexOf('p'));

const gameNameSub = gameName.substring(0, 4);
console.log(gameNameSub);

const gameNameSlice = gameName.slice(-8, 4) // allows negative indices
console.log(gameNameSlice);

const newStringOne = "            Abhinav                   Mahajan     \n ";
const newStringOneTrimmed = newStringOne.trim(); // trims the spaces and newLine char in the beginning and the end
// console.log(newStringOne);
// console.log(newStringOneTrimmed);

const url = "https://Abhinav.com/Abhinav%20Mahajan" // browser does not read space, it automatically puts "%20" in place of space characters
console.log(url.replace("%20","-"));

console.log(url.includes("nav"));
console.log(url.includes("Nav"));
