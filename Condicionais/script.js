// var nome = " ";

// if (nome) {
//     console.log("verdadeiro");
// }
// else {
//     console.log("falso");
// }

// Operador e tem maior precedência em relação ao operador ou
var condicao = (0 + 0) || (3 - 5) && (10 - 2);

// var condicao2 = (5 - 5) || (5 + 5) && (10 - 2);
if (condicao) {
    console.log("Verdadeiro");
    console.log(condicao);
}
else {
    console.log("Falso");
}




// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var irmaoIdade = 10;
var minhaIdade = 20;

if (minhaIdade > irmaoIdade) {
    console.log("É maior!");
}
else if (minhaIdade === irmaoIdade) {
    console.log("É igual!");
}
else {
    console.log("É menor!");
}

switch (irmaoIdade) {
    case irmaoIdade > minhaIdade:
        console.log("É maior");
        break;
    case irmaoIdade = minhaIdade:
        console.log("É igual")
        break;
    default:
        console.log("É menor")
        break;
}



if (minhaIdade > irmaoIdade) {
    console.log("é maior");
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);
// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;
if (china > brasil) {
    console.log("maior que brasil");
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso gato');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão-esse');
} else {
    console.log('Falso');
}