const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];


//nombres separados por coma
function getNombres(productos) {
    const nombre = productos.map(producto => producto.nombre)
    return nombre.join(',')
}

//precio total
function getTotalPrice (productos){
let total = 0;
for (const producto of productos){
    total += producto.precio
}
total = parseFloat(total.toFixed(2))
return total;
}

//obtenerPrecioPromedio
const promedio = getTotalPrice(productos) / productos.length;

//precio minimo
let min = productos[0].precio
let prod = 