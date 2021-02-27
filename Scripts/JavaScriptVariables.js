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