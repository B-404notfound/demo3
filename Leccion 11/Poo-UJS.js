class Empleado{

    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return  `Empleado: nombre ${this.nombre},sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento) {
        super(nombre,sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
    }
}


function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
}






let empleado1 = new Empleado('Juan',2500);
let gerente1 = new Gerente('Luis',45000,'Sistemas');


imprimir (empleado1);
imprimir(gerente1);