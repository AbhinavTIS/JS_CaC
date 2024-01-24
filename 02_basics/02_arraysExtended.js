//Converting obtained data into array so that it can be iterated over

//Data can come as diff format like object, nodelist or string

console.log(Array.isArray("Abhinav"));  // tells if the arguement is an array object or not
//conversion to array 
console.log(Array.from("Abhinav"));
console.log(Array.from({name : "Abhinav"})); // this is a unique case. Output will be an empty array cus 
                                            //  it cannot convert into into elements

                                            