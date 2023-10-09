class DispositivoEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca (){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton},tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

     constructor(tipoEntrada,marca) {
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
     }

     get idTeclado(){
        return this._idTeclado;
     }
     toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
     }


}

class Monitor{
    static contadorMonitores = 0;

     constructor(marca,tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
     }
     get idMonitor(){
        return this._idMonitor;
     }
  
     toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño} ]`;
     }
}

let monitor1= new Monitor("ViewSonic","80");
let monitor2 = new Monitor("Samsung","23");
let teclado1=new Teclado("Bluetooh","HP");
let teclado2 = new Teclado("USB","Linux");
let raton1 = new Raton("USB","HP");
let raton2 = new Raton("USB","EPSON")
console.log(raton2.toString());
console.log(raton1.toString());
console.log(teclado1.toString());
console.log(teclado2.toString());
console.log(monitor1.toString());
console.log(monitor2.toString());