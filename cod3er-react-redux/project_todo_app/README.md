# TODO APP

# BackEnd

**Dependencias**
+ body-parser: ler os parametros para virem como JSON
+ express: 
+ mongose: mapear do node para o mongo de forma JSON
+ node-restful: CRUD para acessar o Mongo com Express
+ pm2: launcher que iniciará nosssa aplicação. Ele faz monitoramento de memória e gerencia melhor. (ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS)
+ nodemon: launher do node, mas não adequada para produção. Reinicia a aplicaçâo toda vez que um arquivo foi modificado

### mongo

````
$ sudo mongod
````
Para funcioanr deve ter na raiz do seu PC a pasta `/data/db` e dar total permissão pra ela

### Estartar com o PM2 no backend

````
npm run production
````
Para iniciar, deve ativar o `sudo mongod` antes
### Observação

Funcionou certinho como deveria

# Front-END

## Executar

`npm run dev`

## template de tipos de componente

**Baseaddo em classe**
import React, { Component } from 'react' // COmponente baseado em classe

export default class Todo extends Component {
    render() {
      return (
        <div><h1>Todo</h1></div>
      )
    }
}


**Baseado em FUnção**
import React from 'react'

export default props => (
  <div><h1>Sobre</h1></div>
)


#### React Router



import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'


Emxelo?
:
<Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>

o {hashHistory} pode haver outras estratégias como browser history
+ Sempre que o path for /todos , vai carregar o compoennte Todo
+ na utlimta linha, é o redirect

No app.jsx vai ficar da seguinte forma 

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)

Ou seja, vai ter sempre o menu no topo, e o ROutes, vai trocar de compeonte a meida que muda de URL sendo tudo uma SPA que muda a URL

## Exmeplp de componente  que simplifica codificaçâo HTML

render() {
    const gridClasses = this.toCssClasses(this.props.cols || 12)
    return (
        <div className={gridClasses}>
            {this.props.children}
        </div>
    )
}

this.props.children vai ser todas as tags que estâo dentro da chamda desse componente, assim, esse componente cria uma Div com atributos CSSS já especificados


<Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}></input>
            </Grid>

if.jsx
Componente interresasnte: COm ele vamos pode renderizar ou nâo certos ccompoentne e sem precisar fazer uma avaliaçâo dcom uma funçâo javaScript direto.

O que ele efaz: se vinher algo em props.test vai renderizar o que está dentro, caso contrario, nâo redenriza nada. Assim, vamos poder mostrar ou nâo um elemento sem precisar usar o 'hide ou diplsy none' d css

````
import React from 'react'


export default props => {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

Usado em iconButton.jsx

```` 
import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-'+ props.style} 
            onClick={props.onClick}>
            <i className={'fa fa-'+ props.icon}></i>
        </button>
    </If>
)
````
````

EM JS é possivel term uma espece de atribuiçâo default
````/
const list = props.list || [] // se nâo houver lista ennuuma, entao, eu coloco como vazio
````/
