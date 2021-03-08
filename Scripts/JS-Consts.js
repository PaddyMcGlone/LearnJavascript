const car = { type: "Fiat", model: "500", colour: "White" }; 

car.colour = "red";

car.model = "500L";

console.log(car);

// Can change object properties but not reassign a const var

// Raises an exception.
// car = { type: "Citroen", model: "DS", colour: "White" };

const cars = ["Saab", "Citroen", "Volvo", "Volkswagen"];

cars[0] = "Toyota";

cars.push("Audi");

console.log(cars);