// function verficaTerceiraIdade(idade) { //parametro
//     if (typeof idade !== 'number') {
//         return console.log("Insira sua idade!");
//         // console.log(idade);
//     }
//     else if (idade >= 60) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(verficaTerceiraIdade(59));// argumento

// function imc(peso, altura) {
//     const imc = peso / (altura ** 2);
//     return imc;
// }

// const btn = document.querySelector("button");

// btn.addEventListener('click', () => { // o mesmo que function(){}
//     alert(`seu imc é: ${imc(82, 1.8)}`);
// })

var profissao = 'Designer';

function dados() {
    var nome = 'André';
    var idade = 28;
    return outrosDados();
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 92;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }

}


console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro



console.log(teste);//hoisting variaveis
var teste = "ola";

imc(80, 1.80); // imc aparece no console // hoisting Função

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

//EXERCICIOS JS

// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  