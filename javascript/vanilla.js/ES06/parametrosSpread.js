
function device(type, name, brand){
    console.log(`El ${type} ${name} es de la marca ${brand}`);
}

var cellphone = new Array("celular", "A2", "Xiaomi");

device(...cellphone);