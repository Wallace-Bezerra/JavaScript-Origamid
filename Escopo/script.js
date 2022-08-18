// Por qual motivo o código abaixo retorna com erros?

// porque const e let estão em escopo de bloco e o var vaza para fora
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
// console.log(cor, marca, portas);


// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));


// O que fazer para total retornar 500?
var numero = 50;

for (let numero = 0; numero < 10; numero++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);

// const nome = prompt("Digite seu nome");
// alert(`Bem vindo ${nome}`);
for (let i = 0; i <= 10; i++) {
    console.log(`O dobro de ${i} é : ${i * 2}`);
}