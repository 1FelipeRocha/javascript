var sum = function calculateSum (x,y){
    return x + y;
    
}

console.log (sum(2,3))
//console.log( `A soma de ${x} e ${y} é igual a ${x+y}.`)

console.log(`O nome da função que faz a soma é ${sum.name}.`)

function showName (){
    return 'Felipe';
}

var varshowName = function(){
    showName();
};

console.log(`A função ${varshowName.name} retorna ${varshowName()}.`)