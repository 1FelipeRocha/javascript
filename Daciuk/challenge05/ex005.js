var bookName = 'Introdução ao HTML5';
console.log(` O livro ${bookName} tem ${book(bookName).quantidadePaginas} paginas `)
function book(bookName) {
    var allbooks = {
    'Segredos Do Ninja Javascript': { quantidadePaginas: 488, autor: 'John Resig', editora: 'Novatec'},
    'Introdução ao HTML5': { quantidadePaginas: 220, autor: 'Bruce', editora: 'Alta Books'},
    'Smashing CSS': { quantidadePaginas:283, autor:'Erick A. Meyer', editora: 'Bookman'}
    };
    return !bookName ? allbooks : allbooks[ bookName];
    }
    console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`)
    console.log( `O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`)