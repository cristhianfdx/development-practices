/**Asignacion de desestructuración */

var animales = new Array("Perro", "Gato", "Raton");

//Asignacion sin destructuring
var perro = animales[0];
var gato = animales[1];
var raton = animales[2];

//destructuring

var [perro, gato, raton] = animales;

