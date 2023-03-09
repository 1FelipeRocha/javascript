var championship = console.log ('paulista');

var teams = console.log(['corinthians', 'palmeiras', 'santos', 'xvdepiracicaba', 'portuguesa']);

function showTeamPosition (x){
    if (x < 1 || x > 5){
        return 'Não temos a informação do time que está nessa posição.';
    }
    
    return `O time que está em ${x}º lugar é o ${teams[x-1]}.`;
}

var a = 20;

while (a <= 31){
    console.log(a++);
}

function converToHex (cor) {
    var hexa;
    switch(cor) {
        case 'azul': 
        hexa = '#FF0000';
        break;
        case 'verde':
        hexa = '#FF1000';
        break;
        case 'preto':
        hexa = '#FF1100';
        break;
        case 'vermelho':
        hexa = '#FF2000';
        break;
        case 'branco':
        hexa = '#FF0300';
        break;   
        default: 
        return `Não temos o equivalente hexadecimal para ${cor}`;   
        
    }
    return `O hexadecimal para a cor ${cor} é ${hexa}.`;
}

console.log( converToHex('vermelho'))