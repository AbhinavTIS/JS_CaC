(function dbConnect(){
    console.log("Database COnnected");
})();

// iffe is basically a fucntion invoked automatically.
// Reason : Prevents any pollution from global scope
//Semi-Colon is REQUIRED

addNum = (a,b) => a+b ;

console.log(addNum(1,2));