// Dates
let myDate = new Date()
//console.log(myDate); unreadable format
 myDateString = (myDate.toString());
 console.log(myDateString);
 


// console.log(myDate.toString());
// // console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());

//++++++++++++++++++++++++++++++++++++TIMESTAMPS+++++++++++++++++++++++++++++++++++++++++++++++//

 let currentTimeStamp = Date.now();
/*                 CONFUSION between new Date() and Date.now()

    .now() is a static only method used to get the present time.
    If we need the time related to some date object we use the object.getTime()

*/

let someDate=new Date("Mar 19 2021");
let someTimeStamp = someDate.getTime();
let gap = currentTimeStamp-someTimeStamp;
console.log(`${gap/1000} milliseconds have passed since ${someDate.toDateString()}`);

// console.log(myTimeStamp);