class Padre{

    constructor(nombre, apellido,edad){
        this.nombre = nombre;
        this.apellido= apellido;
        this.edad=edad;
    }

    obtenerDetalles(){
        return `Padre: nombre: ${this.nombre}, Apellido: ${this.apellido},Edad: ${this.edad}`;
    }
}

class Hija extends Padre{

    constructor(nombre,apellido,edad,correo) {
        super(nombre,apellido,edad);
        this.correo = correo;
    }

    obtenerDetalles(){
        return `Hija: ${super.obtenerDetalles()}, Correo: ${this.correo}`;
    }

}

let padre1 = new Padre('Juan','Lopez',44);
let hija1 = new Hija('Ana','Sanchez',44,'anasanchez@gmail.com');
console.log(padre1.obtenerDetalles());
console.log(hija1.obtenerDetalles());