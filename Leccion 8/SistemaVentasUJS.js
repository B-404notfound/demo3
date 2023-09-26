class Producto {
    static contadorProductos=0;

    constructor(nombre, precio){
        this._idproducto = ++Producto.contadorProductos;
        this._nombre= nombre;
        this._precio = precio;
    }

    get _idproducto(){
        return this._idproducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._precio= nombre;
    }
}