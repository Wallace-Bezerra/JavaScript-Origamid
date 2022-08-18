var comida = ["arroz", "feijão", "carne"];
for (var i = 0; i < comida.length; i++) {
    console.log(comida[i]);
    if (comida[i] === "arroz") {
        break;
    }
}

// Crie uma array com os anos que o Brasil ganhou a copa
// 1958, 1962, 1970, 1994, 2002
var brasilCampeao = [1958, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < brasilCampeao.length; i++) { // usando for
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}
console.log("-----------------------------------------");
brasilCampeao.forEach(function (item) {
    console.log(`O Brasil ganhou a copa de ${item}`);
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância', 'melão']

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === 'Pera') {
        break;
    }
    console.log(frutas[i]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
console.log("ultima fruta -------------")
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

var primeiraFruta = frutas[0];
//quadrado do numero
alert("digite 5 numeros e obtenha o quadrado.");
for (let i = 1; i <= 5; i++) {
    var leia = prompt()// preciso converter para numero
    console.log(typeof leia);
    if (typeof leia !== 'number') {
        alert("Insira um numero valido!");
    }
    else {
        alert(`quadrado é ${leia ** 2}`);
    }

}

