import React, { useState, useEffect } from 'react'

export default props => {

  // useState = você inicia um elemetno que retorna 2 coisas, um valor e a funçâo apra alteralo

    const [contador, setContador] = useState(100) // 100: valor inicial da variavel
    const [parOuImpar, setParOuImpar] = useState('Par')

    // chamado sempre que o elemento for mudado (lyfe_circle)
    useEffect(() => {
        contador % 2 === 0 ?
            setParOuImpar('Par') :
            setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parOuImpar}</h3>
            <button
                onClick={() => setContador(contador - 1)}>
                Dec
            </button>
            <button
                onClick={() => setContador(contador + 1)}>
                Inc
            </button>
        </div>
    )
}
