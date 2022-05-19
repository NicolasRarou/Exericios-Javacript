let permissão = 'Comum'; // Casos de diferentes permissões de um usuário: comum, gerente, diretor; 

switch (permissão){
    case 'comum': 
    console.log("Usuário Comum");
    break;

    case 'gerente': 
    console.log("Usuário Gerente");
    break;

    case 'diretor': 
    console.log("Usuário Diretor");
    break;

    default: 
    console.log ("usuário não reconhecido");
}