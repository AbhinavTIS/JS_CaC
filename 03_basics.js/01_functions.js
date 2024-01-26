function sayMyName() {
    console.log("HEINSENBERG");
}

//sayMyName();

function add(number1,number2){
    return (number1+number2);
}
//console.log (add(1,4));

//--------------------------------------------------------------------------------------------------//

function calculateCartValue(...price1){
    let sum=0;

    for (let index = 0; index < price1.length; index++) {
        sum+=price1[index];    
        
    }
    return sum;
}

//console.log (calculateCartValue(50));
console.log(calculateCartValue(200,50,400,10));
