const ask = require('readline-sync');

function criarUsuario(nome, idade, cidade, hobbies) {
    return [nome, idade, cidade, hobbies];
}

let nome = ask.question(`Me diga seu nome: `)
let idade = ask.question(`Me diga sua idade: `)
let cidade = ask.question(`Me diga a cidade que voce mora: `)
let hobbies = ask.question(`Me diga um de seus hobbies favoritos: `)
let hobbies2 = ask.question(`Me diga outro de seus hobbies favoritos: `)
let hobbies3 = ask.question(`Me diga mais um de seus hobbies favoritos: `)
let usuario = criarUsuario(nome, idade, cidade, hobbies)
console.log(usuario)
// primeiro usuario

let nome2 = ask.question(`Me diga seu nome: `)
let idade2 = ask.question(`Me diga sua idade: `)
let cidade2 = ask.question(`Me diga a cidade que voce mora: `)
let hobbiestwo2 = ask.question(`Me diga um de seus hobbies favoritos: `)
let hobbiestree2 = ask.question(`Me diga outro de seus hobbies favoritos: `)
let hobbiesfour3 = ask.question(`Me diga mais um de seus hobbies favoritos: `)
let usuario2 = criarUsuario(nome2, idade2, cidade2, hobbies)
console.log(usuario2)







// parte um concluida, pedindo dados do usuario.
function formatarHobbies(hobbiesArray) {
    return hobbiesArray.slice(0, -1).join(", ") + " e " + hobbiesArray.slice(-1);
}

let hobbiesArray = [hobbies, hobbies2, hobbies3];

let ola = formatarHobbies(hobbiesArray);

console.log(ola);
// parte 2 concluida, pegamos as respostas jogamos em uma array e organizamos ela

let usuario1 = [nome, idade, cidade, hobbiesArray]
function gerarDescricao(usuario1) {
    console.log(nome, `tem ${idade} anos, mora em ${cidade} e gosta de: ${hobbiesArray}`)

}

gerarDescricao(usuario1)

//parte 3 criamos uma funcao simples que devolve o que foi pedido

const usuarios = []
usuarios.push(nome)
usuarios.push(nome2)
function gerarRelatorio(usuario) {
    return (`Total de usuarios: ${usuarios.length}`)
}
console.log(gerarRelatorio(usuario))

//parte 4 feita.

console.log(nome.toUpperCase(), nome2.toUpperCase())

function listarDescricoes(usuarios) {


}

function listarCidades(usuarios) {
    return (`Cidades em que o usuario morou: ${cidade}`)
}
console.log(listarCidades(usuarios))