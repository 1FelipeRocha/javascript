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