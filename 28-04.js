//criando usuario
function criarUsuario(nome, idade, cidade, hobbies){
    return   [nome, idade, cidade, hobbies]
    
}

//formatando hobbies
function formatarHobbies(hobbies) {
    return hobbies.slice(0, -1).join(", ") + " e " + hobbies.slice(-1);
}

// gerando descrição
function gerarDescricao(usuario1) {
    let nome = usuario1[0]
    let idade = usuario1[1]
    let cidade = usuario1[2]
    let hobbies = usuario1[3]
  
    let hobbiesFormatados = formatarHobbies(hobbies)
  
    return (`${nome} tem ${idade} anos, mora em ${cidade} e gosta de: ${hobbiesFormatados}`)
  }


// parte 4
function gerarRelatorio(usuarios) {
    return (`Total de usuarios: ${usuarios.length}`)
}

//---------------------------------------------------------------
// criando usuario
let user = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "dormir"])

console.log(user)

// formatando hobbies
//let hobbies = ["música", "jogos", "dormir"]
let hobbiesFormatados = (formatarHobbies(user[3]))
console.log(hobbiesFormatados)

// criando usuário
//let usuario1 = criarUsuario("João", 25, "Porto Alegre", ["música", "jogos", "dormir"])
  
// gerando descrição
console.log(gerarDescricao(user))

//imprimindo quantidade de usuarios registrados
const usuarios = []
usuarios.push(user)

console.log(gerarRelatorio(usuarios ))