const objeto = {
  nome: 'astrodev',
  profissao: 'Dev das estrelas',
  username: 'astrodev_labenu',
  senha: 'melhorDeTodos'
}

// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
function upperCase(valor) {
  let novoObj = {}
  for (propriedade in valor) {
    novoObj[propriedade] = valor[propriedade].toUpperCase()
  }
  return novoObj
}
console.log(upperCase(objeto))

// 2. A segunda deve retornar os valores do objeto como texto corrido.
function texto(valor) {
  let text = ''
  for (let propriedade in valor) {
    text += `${valor[propriedade]} `
  }
  return text.trim()
}
console.log(texto(objeto))
// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
function objetoCallback(valor, func) {
  console.log(func(valor))
}
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2
objetoCallback(objeto, upperCase)
objetoCallback(objeto, texto)
