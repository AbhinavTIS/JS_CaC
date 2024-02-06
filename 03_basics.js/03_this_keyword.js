const student = {
  username: "Abhinav",
  ID: 500230044,

  welcomeMessage: function () {
    console.log(`${this.username} Welcome to my website`); // this is an object method refers to the object variables
    console.log(this);
}
};

student.welcomeMessage();

///// 
// student.username = "Sam"
// student.welcomeMessage();


console.log(this);// returns an empty global object in node , and "Window " in browser

//IMPORTANT this keyword doesnt work in functions but OBJECTS.
