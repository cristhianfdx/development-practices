//--Métodos
// function log(target, key) {
//     console.log(key, 'Se ha llamado');
// }

// class Persona {
//     private name: string;

//     constructor(name: string) {
//         this.name = name;
//     }

//     @log
//     sayMyName() {
//         console.log(this.name);
//     }
// }

// const persona: Persona = new Persona('Cristhian');
// persona.sayMyName();

//--Clases

// function init(target){
//     return class extends target {
//         nombre = 'Cristhian';
//         apellido = 'Forero';

//         sayMyName() {
//             return `${this.nombre} ${this.apellido}`;
//         }
//     }
// }

// @init
// class P {
//     constructor() { }

//     sayMyName() { };
// }

// const p: P = new P();
// console.log(p.sayMyName());

//--Propiedades

class Persona {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const p: Persona = new Persona('Cristhian');
p.name = 'Platzi';
const nameFromClass = p.name;
