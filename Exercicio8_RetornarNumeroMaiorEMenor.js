let input = require('prompt-sync')();

function MaxNumber(ValorA = parseInt(input("Digite o Valor de A: ")),ValorB = parseInt(input("Digite o valor de B: "))){
    if(ValorA > ValorB){
        return ValorA;
    } else {
        return ValorB; 
    }
}

function MinNumber(ValorA = parseInt(input("Digite o Valor de A: ")),ValorB = parseInt(input("Digite o valor de B: "))){
    if(ValorA > ValorB){
        return ValorB;
    } else {
        return ValorA; 
    }
}

console.log("O maior Numero é: " + MaxNumber());
console.log("O menor Numero é: " + MinNumber());