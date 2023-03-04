var qualquer = {}

var pessoa = {nome: 'Felipe',
sobrenome: 'Rocha',
sexo: 'Masculino',
idade: 25,
altura: 1.7,
peso: 50,
andando: false,
caminhouQuantosMetros: 0}

pessoa.fazerAniversario = function (){
    return pessoa.idade++;
};

pessoa.andar = function (x){
    pessoa.caminhouQuantosMetros += x;
    pessoa.andando = true;
};

pessoa.parar = function(){
    pessoa.andando = false;
};

pessoa.nomeCompleto = function(){
    return `Olá! Meu nome é ${pessoa.nome} ${pessoa.sobrenome}!`
};

pessoa.mostrarIdade = function (){
    return `Olá, eu tenho ${pessoa.idade} anos!`
};

pessoa.mostrarPeso = function (){
    return `Olá, eu peso ${pessoa.peso}kg.`
};

pessoa.mostrarAltura = function (){
    return `Minha altura é ${pessoa.altura}m.`
};

pessoa.apresentacao = function(){
    var sexo = 'o'
    var ano = 'anos'
    var metrosc = 'metros'
    if (pessoa.sexo === 'feminino')
    var sexo = 'a';
    if (pessoa.idade === 1)
    var ano = 'ano';
    if (pessoa.caminhouQuantosMetros === 1)
    var metrosc = 'metro';
  
    return `Olá, eu sou ${sexo} ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${ano}, ${pessoa.altura}, meu peso é ${pessoa.peso}kg e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metrosc}!`
};