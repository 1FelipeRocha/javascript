var isTruthy = function (x) {
    return !!x;
};

console.log (isTruthy())

var carro = { marca: 'fiat', modelo: 'gol', placa: 'bzv', ano: 1998, cor: 'vermelho', quantasPortas: 2, assentos: 5, quantidadePessoas: 0}



carro.mudarCor = function (x) {
    carro.cor = x;
};

carro.mudarCor(azul)

carro.obterCor = function () {
    return carro.cor;
};

carro.obterModelo = function () {
     return carro.modelo;
};

carro.obterMarcaModelo = function () {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;
};

carro.obterMarca = function () {
     return carro.marca;
};

carro.obterMarcaModelo = function () {
     return `Esse carro é um ${carro.obterMarca} ${carro.obterModelo}`;
};

console.log(carro.obterMarcaModelo())

carro.addPessoas = function (x) {
    var totalPessoas = carro.quantidadePessoas + x;
    var passageiros = quantasPessoasCabem === 1 ? 'pessoa' : 'pessoas';
    
    if (carro.quantidadePessoas === carro.assentos) { 
        return 'O carro já está lotado!'}
    if (totalPessoas > carro.assentos) {
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        return `só cabem mais ${quantasPessoasCabem} pessoas`}
    
    return `Já temos ${totalPessoas} pessoas no carro `;
};