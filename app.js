// Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
// un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
// de nombres registrados.

let aprendices = ["Ana", "Luis", "Carlos", "Marta", "Sofía"];

aprendices.push("Jorge"); // Agregar un nuevo nombre al final
aprendices.shift(); // Eliminar el primer nombre

console.log("Cantidad total de aprendices registrados:", aprendices.length);
