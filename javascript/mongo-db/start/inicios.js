db.clientes.find(); //Listar todos los registros

db.clientes.insert({firstName: 'cristhian', lastName:'Dgz'}); //Insertar un registro

db.clientes.insert([ //Insertar varios registros
    {firstName: 'Luis', lastName: 'Ruiz'},
    {firstName: 'Lucas', lastName: 'Perez'},
    {firstName: 'Camila', lastName: 'Hernandez'}
]);
    
db.clientes.find().pretty();
    
db.clientes.find({firstname: 'Luis'}); //Buscar un registro

//Actualizar un registro
db.clientes.update( 
    {firstName: 'Luis'},
    {firstName : 'Luis', lastName: 'Ruiz', genero: 'M'}
);


//Agregar un campo o actualizar un campo
db.clientes.update(
    {_id: ObjectId("5c005795717db02fe1c514db")},
    {
        $set :{age:18}
    }
);

//Actualizar un campo especifico incrementando ejemplo 18 + 29 = 47
db.clientes.update(
    {_id: ObjectId("5c005795717db02fe1c514db")},
    {
        $inc :{age:29}
    }
);

//Eliminar un campo especifico
 
db.clientes.update(
    {_id: ObjectId("5c005795717db02fe1c514db")},
    {
        $unset :{age:1}
    }
);

//Actualiza un registro, pero si no existe en la BD crea el registro

db.clientes.update( 
    {firstName: 'Santiago'},
    {firstName : 'Santiago', lastName: 'Reyes', genero: 'M'},
    {upsert: true}
);

//renombrar un campo en un registro

db.clientes.update(
  {firstName: 'Santiago'},
  {$rename :{'genero' : 'sexo'}}
);  

//Eliminar un dato

db.clientes.remove(
 {firstName: 'Santiago'}
);

//En caso de que se repita el criterio de busqueda, elimina solo uno de los datos

db.clientes.remove(
 {firstName: 'cristhian'},
 {justOne: true}
);

//---------------Consultas más especificas------------------------------------

//Buscar dos o mas datos en una sola consulta ousando el operadro '$or'

db.clientes.find(
 {$or : [
            {firstName: 'cristhian'},
            {firstName : 'Luis'}
        ]
 }
 );
 
db.clientes.insert([
    {name: 'Pedro', age: 31},
    {name: 'Pablo', age: 21},
    {name: 'Hugo', age: 51},
 ]);
    
//Buscar los usuarios mayores de 30 años ---$gt -> mayor que

db.clientes.find(
    {age : {$gt :30}}
);

//Buscar los usuarios menores de 30 años ---$lt -> menor que

db.clientes.find(
    {age : {$lt :30}}
);

//Buscar mayor que 31 y menor que 60

db.clientes.find(
    {age : {$gt :31, $lt: 60}}
);

//Acceder a una propiedad dentro de otra 

db.clientes.insert(
    {
        firstName: 'Zack',
        address: {
            city : 'Bogota'
        }
    }
);

db.clientes.find(
    {'address.city': 'Bogota'}
);

//Buscar un dato mediante expresión regular

db.clientes.find(
    {name: {$regex: 'dro'}}
);

//Buscar datos y mostrarlos de manera ordenada ascendentemente 1

db.clientes.find().sort({lastName:1});

//Buscar datos y mostrarlos de manera ordenada descendentemente -1

db.clientes.find().sort({lastName:-1});

//Contar el numero de registros; devuelve el numero de datos en la coleccion

db.clientes.find().count();

db.clientes.find({genero: 'M'}).count();//con criterio de busqueda

//Limitar el numero de busquedas
db.clientes.find().limit(4);
db.clientes.find().limit(4).sort({firstName : -1});

//Usar metodos de javascript
db.clientes.find().forEach(function(doc){
    print("Cliente Name : " + doc.firstName);
});




    
