function calculator(x,y){
    return function(callback){
        return callback(x,y)
    };
    
} 

var sum = calculator(2,3);

console.log( sum(function(x,y){
    return x +y;
}));