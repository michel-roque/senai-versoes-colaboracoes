/*
- Sistema de Cadastro De Peças
OK - Permitir o cadastro de peça somente se ela pesar mais de 100g
OK - Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: lista de peças está lotada.
- Validar se o nome da peça possui mais de 3 caracteres
*/

let peso = 50
if(peso<100){
     console.log("A peça deve ter no minimo 100g")
}else{
console.log("A peça possui o tamanho adequado")
}

var listaDePecas = ["Lanterna", "Motor", "Amortecedor", "cambio", "painel", "cabeçote"]
if(listaDePecas.length < 10){
    //é possivel cadastrar
    console.log("é possivel cadastrar mais!! me da mais!! birllll!!!")
} else{
    console.log("Não vai dar não.... acabou o espaço")

} 
let nomePeca = "ivonette"
if(nomePeca.length>3){
    console.log("Nome de peça adequado para o cadastro")
}else{
    console.log("O nome da peça deve ter mais de 3 caracteres, digite um nome adequado")
}