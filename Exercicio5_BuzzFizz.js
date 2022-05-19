// Exercicio BuzzFizz
// Se um numero é divisível por 3, então deve retornar "Fizz"
// Se um numero é divisível por 5, então deve retornar "Buzz"
// Se um numero é divisível por ambos, então deve retornar "BuzzFizz"

for(let i = 1; i < 100; i++){
    if (i % 15 == 0){
        console.log("BuzzFizz");
    } 
    
    else if(i % 5 == 0){
        console.log("Buzz");
    }

    else if (i % 3 == 0){
        console.log ("Fizz");
    } 
    
    else{
        console.log(i);
    }
}