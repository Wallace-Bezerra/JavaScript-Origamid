function verficaTerceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return console.log("Insira sua idade!");
        // console.log(idade);
    }
    else if (idade >= 60) {
        return true;
    }
    else {
        return false;
    }
}

console.log(verficaTerceiraIdade(59));