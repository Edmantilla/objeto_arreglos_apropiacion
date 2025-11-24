// Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
// usando for y calcule el promedio (no use funciones externas).

let notas = [85, 90, 78, 92, 88, 76];
let suma = 0;
// Recorriendo el arreglo con for
for (let i = 0; i < notas.length; i++) {
    // Sumando las notas
    suma += notas[i];
}
// Calculando el promedio
let promedio = suma / notas.length;
// Mostrando el promedio
console.log("El promedio de las notas es:", promedio);
