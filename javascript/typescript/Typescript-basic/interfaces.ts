type Dni = number;

interface Persona {
    altura?: number;
    edad: number;
    nombre: string;
    apellido: string;
    dni: Dni;
    test(): void;
}

class Persona1 implements Persona{
    altura?: number;    edad: number;
    nombre: string;
    apellido: string;
    dni: number;
    test(): void {
        throw new Error("Method not implemented.");
    }



}

// const persona: Persona = {
//     edad: 27,
//     nombre: 'Cristhian',
//     apellido: 'Forero',
//     dni: 1234
// }
