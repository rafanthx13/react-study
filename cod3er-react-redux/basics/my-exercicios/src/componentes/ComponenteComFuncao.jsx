import React from 'react'

// Componentes baseados em função
// Bons quando são stateles - São algo que so serve para receber algo por props

export default props => {
    const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Julia']

    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}
