// Area do circulo
// Usando npm i prompt-sync 

let input = require('prompt-sync')();

console.log("Digite o valor do raio:");
let raio = input();

let pi = 3.14159;
let area;

area = pi * Math.pow(raio,2);

console.log("A=" + area.toFixed(4));
