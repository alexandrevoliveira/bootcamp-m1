const empresa = {
    Nome: "Rocketseat",
    Cor: "Roxo",
    Foco: "Programacao",
    Endereco: {
        Rua: "Rua Guilherme Gembala",
        Numero: 260
    }
}

console.log(`A empresa ${empresa.Nome} esta localizada em ${empresa.Endereco.Rua}, ${empresa.Endereco.Numero}`)

const programador = {
    nome: "Alexandre",
    idade: 24,
    tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuario ${programador.nome} tem ${programador.idade} e usa a teconologia 
${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)