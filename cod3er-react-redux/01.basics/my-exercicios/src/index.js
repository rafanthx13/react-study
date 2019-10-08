import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')
// ReactDOM.render(<h1>Olá Mundo</h1>, elemento)

ReactDOM.render(
  <div>
    <PrimeiroComponente></PrimeiroComponente>
  </div>
, elemento)


// const jsx = <h1>Olá React!</h1>
