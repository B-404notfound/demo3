class Producto {
    static contadorProductos=0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._precio= nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        return this._precio=precio;
    }

    toString(){
        return `idProducto:${this._idProducto} , nombre:${this._nombre},precio:$ ${this._precio}`;
    }
}

class Ordenes{
    static contadorOrdenes=0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Ordenes.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;

        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }
}

let producto1 = new Producto('Pantalon',3000);
let producto2 = new Producto('Camisa',3400);
let producto3  = new Producto('Zapatos',5000);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(producto3.toString());
