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