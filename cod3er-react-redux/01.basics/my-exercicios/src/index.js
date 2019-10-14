// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import {CompA, CompB as B} from './componentes/DoisComponentes.jsx'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Familia sobrenome="Pereira">
        <Membro nome="Andre" />
        <Membro nome="Gustavo" />
        <Membro nome="Amelia" />
    </Familia>
    {/*
      <Familia>
      <Membro nome="Pedro" sobrenome="Arruda" />
      <Membro nome="Gustavo" sobrenome="Arruda" />
      </Familia>
    */}

  </div>
, elemento)
