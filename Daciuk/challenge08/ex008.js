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

function calculator(z){
    function calculator2(a,b){
       switch(z){
       case'+': return `Resultado da operação: ${a} ${z} ${b} = ${a + b}`;
       break;
       case'-': return `Resultado da operação: ${a} ${z} ${b} = ${a - b}`;
       break;
       case'*': return `Resultado da operação: ${a} ${z} ${b} = ${a * b}`;
       break;
       case'/': return `Resultado da operação: ${a} ${z} ${b} = ${a / b}`;
       break;
       case'%': return `Resultado da operação: ${a} ${z} ${b} = ${a % b}`;
       break;
       default: return `Operação inválida`;
       }
    }
    return calculator2;
}

var sum = calculator('+');
console.log(sum(2,3))

var subtraction = calculator('-')
console.log(subtraction(3,2))

var multiplication = calculator('*')
console.log(multiplication(2,3))

var division = calculator('/')
console.log(division(3,2))

var mod = calculator ('kaere')
console.log(mod(2,3))




//VERSÃO DACIUK

/*function calculator(z){
    function calculator2(a,b){
        var result;
       switch(z){
       case'+': result = a + b;
       break;
       case'-': result = a - b;
       break;
       case'*': result = a * b;
       break;
       case'/': result = a / b;
       break;
       case'%': result = a % b;
       break;
       default: return `Operação inválida`;
       }
       return `Resultado da operação: ${a} ${z} ${b} = ${result}`;
    };
    return calculator2;
}

var sum = calculator('+');
console.log(sum(2,3))
*/
