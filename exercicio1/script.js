const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Crie duas funcões que recebem como parâmetro um objeto.
//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// function caixaAlta (elemento){
//     elemento.nome = elemento.nome.toUpperCase()
//     elemento.profissao = elemento.profissao.toUpperCase()
//     elemento.username = elemento.username.toUpperCase()
//     elemento.senha = elemento.senha.toUpperCase()
//     return elemento
// }

function caixaAlta(elemento){
    for(let i in elemento){
        elemento[i] = elemento[i].toUpperCase()
    }
}

console.log(caixaAlta(objeto))

//A segunda deve retornar os valores do objeto como texto corrido.
function textoCorrigido(elemento){
    let text = ""
    for(let i in elemento){
        text += ` ${i} ${elemento[i]}`
    }
    return text.trim()
}
console.log(textoCorrigido(objeto))


//Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.