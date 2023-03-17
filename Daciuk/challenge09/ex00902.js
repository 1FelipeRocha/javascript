function calculator(x,y){
    return function(callback){
        return callback(x,y)
    };
    
} 

var sum = calculator(2,3);

console.log( sum(function(x,y){
    return x + y;
}));

var subtraction = calculator(1,2);

console.log(subtraction(function(x,y){
    return x - y;
}));

var multiplication = calculator(5,5);

console.log(multiplication(function(x,y){
 return x * y;
}));

var division = calculator(6,6);

console.log(division(function(x,y){
    return x / y;
}));

var mod = calculator (5,5);

console.log(mod(function(x,y){
    return x % y;
}));