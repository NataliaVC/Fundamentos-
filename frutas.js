const frutas = ['platano', 'manzanas', 'peras', 'uvas ', 'platano'];
const dinero = 1000;
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hola amigos de Bluuweb",
    e: "oO",
    T: "U "
}));


//module.exports = frutas;

module.exports = {
    frutas,
    dinero
}