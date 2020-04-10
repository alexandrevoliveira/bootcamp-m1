// calcula imc

const nome = 'Alexandre Victor de Araujo Oliveira'
const peso = 72
const altura = 1.84
const sexo = 'M'
const idade = 42
const contribuicao = 12

const imc = peso / (altura * altura)

if (imc >= 30) {
    console.log(`${nome} voce esta acima do peso. Seu imc = ${imc}`)
}
else {
    console.log(`${nome} voce nao esta acima do peso. Seu imc = ${imc}`)
}


const calculoContribuicao = idade + contribuicao

// essas variáveis irão retornar true ou false
const homemPodeAposentar = (sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95)
const mulherPodeAposentar = (sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85)

if ( homemPodeAposentar || mulherPodeAposentar) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}



