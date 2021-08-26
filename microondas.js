// Aula - 09 - 26/08/2021
// Desafio CheckPoint Microondas
// Grupo 02 - Rafael Watanabe (Grupo: Vanessa Matos, Arnaldo Ramos, João Vitor  Dutra, Diego Decrescenzo)


// Foi criado um objeto contendo todos os valores padroes de tempo de cozimento dos alimentos.

let comida = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8
}

// A função abaixo testa o alimento, com 

function microondas(comida, tempo) {


    if (tempo < comida){
        console.log("Tempo Insuficiente!")
    } else if (tempo >= comida && tempo < comida*2) {
        console.log("Prato está Pronto!")
    } else if (tempo >= comida*2 && tempo < comida*3) {
        console.log("Prato Queimou")
    } else if (tempo >= comida*3) {
        console.log("KABUUMM")
    } else {
        console.log("Opção Inexistente!")
    }

}

microondas(comida.pipoca, 10);
microondas(comida.carne, 10);
microondas(comida.feijao, 13);
microondas(comida.pipoca, 30);
microondas(comida.tapioca,10);

