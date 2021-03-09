// Let and const were introduced with ECMAScript 2015

// Global scope - accessed from anywhere within a program.
var carName = "Volvo";

function printName(){
    console.log(carName);
}

printName();

// Function scope - variables defined within a variable.

function printAge() {
    var myAge = 20;

    console.log(myAge);
}

//console.log(myAge); Raises an exception as myAge is undefined.

printAge();