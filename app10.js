// 10.Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
// debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
// con un ejemplo.
// a. Lista de colores favoritos. (arreglo) porque es una coleccion de elementos
// b. Información completa de un estudiante. (objeto) porque es una entidad con varias propiedades
// c. Precios de diferentes camisetas. (objeto) porque cada camiseta tiene un precio asociado
// d. Descripción de un computador portátil. (objeto) porque tiene varias características específicas

let colores_favoritos = ["Azul", "Verde", "Rojo", "Amarillo"];
console.log("Colores favoritos:", colores_favoritos);

let estudiante = {
    nombre: "Juan Pérez",
    edad: 21,
    carrera: "Ingeniería de Sistemas",
    semestre: 5
};
console.log("Información del estudiante:", estudiante);

let precios_camisetas = {
    camiseta1: 15.99,
    camiseta2: 20.49,
    camiseta3: 12.75
};
console.log("Precios de camisetas:", precios_camisetas);

let computador_portatil = {
    marca: "Dell",
    modelo: "XPS 13",
    procesador: "Intel i7",
    ram: "16GB",
    almacenamiento: "512GB SSD"
};
console.log("Descripción del computador portátil:", computador_portatil);



