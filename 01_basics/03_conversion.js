let score = "82"
let score1 = "82abc"
let score2 = null
let score3 = undefined
let score4 = true
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)

/*
Notes

"82" -> 82
"aas" -> NaN
true -> 1
undefined -> NaN
null -> 0

in JS 0 is false and other integers are all true
Empty string is false. all other strings are true.
*/

let isLoggedIn = -3.5

let valueInBoolean = Boolean(isLoggedIn)
//console.log(valueInBoolean);

let someNumber = 44
let valueInString = String(someNumber)
console.log(valueInString, typeof valueInString);

