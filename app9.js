// Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
// tres objetos. Cada objeto debe representar un producto con propiedades como
// nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
// cada producto.

let productos = [
    { nombre: "Laptop", precio: 1200, disponibilidad: true },
    { nombre: "Smartphone", precio: 800, disponibilidad: false },
    { nombre: "Tablet", precio: 500, disponibilidad: true }
];
for (let i = 0; i < productos.length; i++) {
    console.log("Nombre del producto:", productos[i].nombre);
}


