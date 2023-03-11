var qualquer = ['Felipe', 10, true, 'Rocha', 20]

function addItem (x) {
    qualquer.push(x);
    return qualquer;
}
console.log (addItem(['Ninja', 15, false]))

console.log(`O segundo elemento do segundo array é ${qualquer[5][1]}`)

console.log(`O primeiro array tem ${qualquer.length} itens`)  

console.log(`O segundo array tem ${qualquer[5].length} itens`)

var num = 10
while (num <=20){
    num % 2 === 0? console.log (num) : '';
    num++;
}

while (num <=20){
    num % 2 !== 0? console.log (num) : '';
    num++;
}


for (var par = 100; par <= 120; par % 2 === 0? console.log(par) : '', par++){}
for (var impar = 111; par <= 125; par % 2 !== 0? console.log(impar) : '', impar++){}




