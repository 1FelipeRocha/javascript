var sum = function calculateSum (x,y){
    return x + y;
    
};

var x = 10;
var y = 20;
console.log ( `A soma de ${x} e ${y} é igual a ${sum(x,y)}.`)

console.log(`O nome da função que faz a soma é ${sum.name}.`)

function showName (){
    return 'Felipe';
}

var varshowName = showName;

console.log(`A função ${varshowName.name} retorna ${varshowName()}.`)