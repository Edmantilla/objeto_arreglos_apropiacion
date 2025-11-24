
let personas = [
    45, 12, 37, 52, 29];

for (let edades of personas) {
    if (edades >= 18) {
        console.log(`Edades: ${edades} `);
    } else {
        continue;
    }
}
