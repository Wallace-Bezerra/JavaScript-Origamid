var pessoa = {
    nome: 'wallace',
    idade: 20,
    estado: 'sp',
    teste() {
        console.log("ola mundo");
    },
    teste2: () => {
        console.log("teste2");
    }
}

console.log(pessoa.estado);
pessoa.teste2();
pessoa.teste();
///
var objeto = {
    nome: 'wallace',
    idade: 20,
    cidade: "São Paulo",
}

objeto.teste = "oi";

objeto.nome;

// EXERCICIOS OBJETOS

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
    nome: "wallace",
    sobrenome: "bezerra da silva",
    idade: 20,
    cidade: "São Paulo",
    teste() {
        return "teste objeto";
    }
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.mostrarNomeCompleto = () => {
    return `${dados.nome} ${dados.sobrenome}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: "labrador",
    cor: "preto",
    idade: 10,
    late(homem) {
        if (homem) {
            console.log("AUAU");
            console.log(typeof homem);
        }
        else {
            console.log('Não late');
        }
    }


}

