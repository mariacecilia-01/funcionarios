'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

function crachaFuncionario(funcionario){

    const container = document.getElementById('container')
    const div = document.createElement('div')

    const imagem = document.createElement('img')
    const nome = document.createElement('p')
    const cargo = document.createElement('span')

    imagem.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo

    div.appendChild(imagem)
    div.appendChild(nome)
    div.appendChild(cargo)
    container.appendChild(div)
    

}

    
function carregarCracha(){
    funcionarios.forEach(crachaFuncionario)
}

carregarCracha()