var text = '{ "empleados" : [' +
'{ "primerNombre":"John" , "segundoNombre":"Doe" },' +
'{ "primerNombre":"Anna" , "segundoNombre":"Smith" },' +
'{ "primerNombre":"Peter" , "segundoNombre":"Jones" } ]}';

var obj = JSON.parse(text);

console.log(obj.empleados[1].primerNombre);
