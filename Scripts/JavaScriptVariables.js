var x = 10;

console.log("Before function : " + x);

myFunction();

function myFunction() {
    var x = 2;
    console.log("Inside the function: " + x);
}

console.log("After the function: " + x);


// Loop support

var i = 5;

console.log(i);

for(var i = 0; i < 10; i++){
    console.log(i);
}

var person = "John Doe", CarName = "Volvo", price = 200, Owner;

console.log(person, CarName, price, Owner);

var personsName = "My persons name";
var personsName; // This will not redeclare the variables.

var stringsum = "2" + 2 + 2;
var intsum = 2 + 2 + "2";

console.log(stringsum);
console.log(intsum);