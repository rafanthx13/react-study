// Contador.jsx

// Componente baseado em classe

import React, { Component } from 'react'

export default class Contador extends Component {

    // Usamos estado, pois, nao podemos modificar os valores de 'this.props'
    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.alterarNumero(1)
        // this.setState({ numero: this.state.numero + 1 })
        // this.state.numero = this.state.numero + 1
    }

    menosUm = () => {
        this.alterarNumero(-1)
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    // método obrigatorio
    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={ this.maisUm }>Inc</button>
                <button onClick={ this.menosUm }>Dec</button>
                <button onClick={() => this.alterarNumero(10)}>
                    Inc 10</button>
                <button onClick={() => this.alterarNumero(-10)}>
                    Dec 10</button>
            </div>
        )
    }
}

// Fomar para que o this aponte para meu componente mesmo
// Porque muitas vezes o 'this' nâo apaonta para o que agente quer


// Solução 01 - Bind
// constructor(props) {
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
//     // estou garantindo que o 'this' esta'apontando para a instancia do contador
// }

// Solução 02 - Função Arrow (onClick)
// <button onClick={() => this.maisUm()}>Inc</button>
// // A arrow_function garante que o this se referencie
// //   zo local aonde a função foi escrita.

// Solução 03 - Função Arrow
// // Tranformar a função "maisUm" em uma função arrow
// maisUm = () => {
//     // this.props.numero++
//     console.log(this)
// }
