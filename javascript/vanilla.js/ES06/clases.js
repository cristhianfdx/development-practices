/*class Dog{    

    constructor(name, raza){
        this.name= name;
        this.raza = raza;
    }

    ladrar(){
        return "Gua guauu";
    }

    static say(){
        return "Hola";
    }
}

class Max extends Dog{

    constructor(name, raza, edad){
        super(name, raza);
        this.name = name;
        this.raza = raza;
        this.edad = edad;
    }
}*/

//var perro = new Dog("Max", "Chanda");
/*
console.log(perro.ladrar());
console.log(Dog.say());
*/

//var max = new Max("Rufo", "Chanda", 10);

//console.log(max);

class Crash {
    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }
}

var cf = new Crash();

cf.name = "Cristhian";

console.log(cf.name);