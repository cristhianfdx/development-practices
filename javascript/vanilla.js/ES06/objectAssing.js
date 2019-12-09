//Permite copiar los atributos de un objeto a otro

var a = {a:1, b:2, c:3};
var b = {d:4, e:5, f:6};
var c = {g:7, h:8, g:9}

var d ={};

Object.assign(d,a,b,c);

console.log(d);

/**
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 */