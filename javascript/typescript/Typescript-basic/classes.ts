class Transporte {

    private velocidad: number;
    private formaMovilidad: string;

    constructor(velocidad: number, formaMovilidad: string) {
        this.velocidad = velocidad;
        this.formaMovilidad = formaMovilidad;
    }

    getVelocidad() {
        return this.velocidad;
    }

    setVelocidad(velocidad: number) {
        this.velocidad = velocidad;
    }

    getFormaMovilidad() {
        return this.formaMovilidad;
    }

    setFormaMovilidad(formaMovilidad: string) {
        this.formaMovilidad = formaMovilidad;
    }
}

const transporte: Transporte = new Transporte(120, 'suelo');

class Auto extends Transporte {
    
    private cantidadPuertas: number;

    constructor(velocidad: number, formaMovilidad: string, cantidadPuertas: number){
        super(velocidad, formaMovilidad);
        this.cantidadPuertas = cantidadPuertas;
    }
}
