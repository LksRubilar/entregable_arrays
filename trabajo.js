class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    valorTotal() {
        this.valor= this.valor*this.cantidad;
    }
}

const polera = new Producto("Polera", 15000);
const pantalon = new Producto("Pantalon", 25000);
const poleron = new Producto("Poleron", 18000);

///incorporamos los productos a un array
const stockProductos = [polera, pantalon, poleron]; ///esto es el stock, si quieres agragar al carrito debes crear un nuevo array paero vacio para ir completandolo manualmente, con push.

///mostrar los productos en stock (stockProductos)
console.log("Bienvenido\n Los productos en stock son los siguientes:\n");
console.log(stockProductos);


let unidadesPol = 0;
let unidadesPan = 0;
let unidadesPole = 0;

unidadesPol = parseInt(prompt("Por favor indique cuantas poleras desea llevar?"));
unidadesPan = parseInt(prompt("Por favor indique cuantos pantalones desea llevar?"));
unidadesPole = parseInt(prompt("Por favor indique cuantos polerones desea llevar?"));
//salida
//contador por cantidad de producto y sumador de valores
const carrito = [];
carrito.push(new Producto("Poleras",15000,unidadesPol));
carrito.push(new Producto("Pantalon",25000,unidadesPan));
carrito.push(new Producto("Poleron",18000,unidadesPole));


function mostrarValorTotal(array, funcion) {
    for (let producto of carrito) {
        funcion(producto);
    }

}


function calcularTotal(total){
let Total=0;
let totalproductos = total
for (let i=0; i < totalproductos.length; i++){
    let total = (totalproductos[i].valor);
    
    Total = Total + parseInt(total);
}
return Total
}

/*
function calcularTotal(producto) {
    let total = 0;
    let totalPoleras = unidadesPol;
    let totalPantalones = unidadesPan;
    let totalPolerones = unidadesPole;

    let total = (unidadesPol * precio) + (unidadesPan * precio) + (unidadesPole * precio);

}  */

mostrarValorTotal(carrito, calcularTotal);
console.log(carrito)
console.log("El total de su compra es: ", calcularTotal);

