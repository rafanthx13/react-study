// ComponenteClasse.jsx

import React, { Component } from 'react'

export default class ComponenteClasse extends Component {

    // metodo obrigatorio para componentes baseados em classenao
    // recebe nenhum parametro
    // para acessar as props eu acesso com 'this.'
    // o || serve para passar um valor default caso nao estiver passadno nada (false)
    render() {
        return (
            <h1>{this.props.valor || 'Valor Padrão'}</h1>
        )
    }

}
