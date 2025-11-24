// Describiendo un objeto personal: Cree un objeto que represente algo que lleve
// consigo todos los días (ej. audífonos, libreta, termo). Debe tener al menos cuatro
// propiedades. Recorra sus claves y valores usando un ciclo for...of sobre
// Object.entries().
let bolso = {
    tipo: "Mochila",
    color: "Negro",
    contenido: "Cuaderno, lapiceros, audífonos",
    marca: "Toto"
};

for (let [clave , valor] of Object.entries(bolso)) {
    console.log(`${clave}: ${valor}`);
}

