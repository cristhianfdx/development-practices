/**Map estructura de datos clave-valor */

var car = new Map();

car.set("marca", "BMW");
car.set("nombre", "Makio");
car.set("color", "blanco");

console.log(car);
console.log(car.has("marca"));

car.forEach(function(value, key, car){
    //console.log(value);
    //console.log(key);
    //console.log(car);
});