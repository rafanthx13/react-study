# Fundamentos do React - cod3r

## Índice

[TOC]

## Links

+ https://pt-br.reactjs.org/

## O que é o REACT



## `create-react-app` : Criador de projtos react

`create-react-app` : É um pacote do npm para criar proojetos react

Para instalar globalmente, execute o código abaixo:

````
> npm i -g create-react-app
````

Para criar um projeto com ele, (vai criar uma pasta com o 'nome_projeto', digite o código abaixo após executar o passo anterior (Esse processo demora)

````
> create-react-app my-exercicios-react
````

depois entra na pasta e digite

````
> npm start
````

`npm start`: Executar o browser (localhost:3000). ELe atualiza cada vez que é atualizado os arquivos.

### Estrutura Criada

```
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── componentes
    │   └── PrimeiroComponente.jsx
    └── index.js

```



## JSX



**É uma sintaxe que paraece com HTML mas é convertida para JavaScript Puro** durante o processo de build ou que fica na memória durante o desenvolvimento. É possível entâo armazenar código HTML como se fosse uma variável que não é uma string

````javascript
const lista = document.createElement('ul')	

let item = documento.rceateLement('li')
let texto = document.creatTextNode('1) Pedro')
item.appendChild(texto)
lista.append(item)

let item = documento.rceateLement('li')
let texto = document.creatTextNode('2) Kaarma')
item.appendChild(texto)
lista.append(item)

let item = documento.rceateLement('li')
let texto = document.creatTextNode('3) Sensui')
item.appendChild(texto)
lista.append(item)

const elemento = document.getElementById('root')
````

````
ReactDOM.render(
	<ul>
		<li> 1) Pedro </li>
		<li> 2) Sensui </li>
		<li> 3) Sensui</li>
		
	</ul>
)
````

### Comentários em `jsx`

`jsx` é como uma sintaxe de html imbutida no javaScript. 

Para fazer o comentários dentro do `jsx`, (nas TAGS HTML) tem que ser através de:

​	`{/* comment */}`

Pois assim, estamos pedindo para interpretar como JavaScript um comentários, que não é escrito na tela

## Componentes

Tem nos frameworks modelos (ANgular 2.0, React e VUe). São coponente de códdigo que contém HTML, CSS  E JS imbitidos. COmo uma miniaplicação, aassim vc forma sua aplicaçâo como árore de romponenets.

Vantagens: 

+ Deixa HTML (Estrutura), CSS (Estilo), JS (COmportemento) num arquivo só
+ Permite reusomais fácil

### Exemplo de Projeto usando 1 Componente

````
├── node_modules/
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── componentes
    │   └── PrimeiroComponente.jsx
    └── index.js
````

Onde tudo é dafault do `create-react-app` exeto:

````jsx
// index.js
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

````

````jsx
// Primeiro Componente
import React from 'react'


function primeiro() {
  return <h1>Primeiro Compoenente</h1>
}

export default primeiro

````

### `props`

`props` é um parametro do componente para poder receber dados de fora dele

Usamos ele entre **chaves** `{}` para o jsx interepretar o valor. 

**Você pode interpretar/interpolar no jsx qualquer coisa dentro das chaves `{}`. Se não, ele interpreta como texto puro**

O nome `props` nâo é obrigatório, mas em regra sempre se usa para deixar explícito que vem de fora

Para **passar o valor** vocÊ deve crirar um atributo na tag e colocar o valor dentro : `<PrimeiroComponente valor="Bom dia">`. Aí vai colocar esse *valor* como uma chave dentro da props

````jsx
// src/componentes/PrimeiroComponentes.jsx

import React from 'react'

export default (props) =>
	<div>
		<h1>{props.valor}</h1>
    	<h2>{props.conta}</h2> <!-- vai mostrar 256-->
	</div>
<!-- Nesse caso, vai pegar o índice valor da prop que será passada -->
````

````jsx
//src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <PrimeiroComponente valor="Bom dia" conta={2**8}></PrimeiroComponente>
  </div>
, elemento)

````

### Múltiplos compoenents em um arquivo `.jsx`

Um arquivo `.jsx` pode retornar mais de um elemento. Para isso, você deve configurar corretemante as funções no sistema de `export modules` do `javascript`.

Além disso, você pode, ao importar, mudar o nome para algo mais simples `import {CompA, CompB as B}`

````jsx
//src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import {CompA, CompB as B} from './componentes/DoisComponentes.jsx'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <CompA valor="Eu sou A"/>
    <CompB valor="Eu sou B"/>
  </div>
, elemento)
````

````jsx
// src/componentes/DoisComponentes.jsx
import React from 'react'

const CompA = props =>
  <h1> Primeiro diz: {props.valor} </h1>

const CompB = props =>
  <h1> Segundo diz: {props.valor} </h1>

export {CompA, CompB}
````

### Retornar Múltiplos elementos no `jsx`

O `jsx` deve ser um único elemento, **ELE NÃO ACEITA NORMALEMNTE RETORNAR ELEMETNOS  ADJASCANTE (IRÂO UM DO LADO DO OUTRO)**

Exemplos:

```jsx
ReactDOM.render(
    <CompA valor="Eu sou A"/>
    <CompB valor="Eu sou B"/>
, elemento)
// ERRO, sâo mais de um e são adjacentes
```

Para solucionar isso, há 3 formas

**Solução 1** - Mais usada!

Envolver os elementos em uma div; A desvantagem é que vai criar uma div a mais

```jsx
export default props =>
     <div>
		<h1>Parte 1</h1>
        <h2>Parte 2</h2>
     </div>
```
**Solução 2**

React.Fragment permite mandar elemetnos adjascentes. Nâo cria DIV

```jsx
export default props =>
    <React.Fragment>
        <h1>Parte 1</h1>
        <h2>Parte 2</h2>
    </React.Fragment>
```
**Solução 3**

Retornar como um Array

```jsx
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]
```

### Sistema de módulos do `js` `import/export`

Observações:

+ Eu nâo consigo retornar algo anôimo sem usar o default, porque não haverá referência pra ele você pode
+ Quando você `exports`  como defalut, vocÊ pdoe renomear no `import`sem nem precisar do `alias/as`

## Relação entre componentes

### Renderiza os elementos filhos de uma tag `props.children`

Exemplo:

````javascript
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
    <Familia>
        <Membro nome="Andre" sobrenome="Pereira" />
        <Membro nome="Mariana" sobrenome="Pereira" />
    </Familia>
    <Familia>
      <Membro nome="Pedro" sobrenome="Arruda" />
      <Membro nome="Gustavo" sobrenome="Arruda" />
    </Familia>
  </div>
, elemento)

````

````javascript
// Familia.jsx

import React from 'react'

export default props =>
  <div>
    {props.children}
  </div>

````

````javascript
// Membro.jsx

import React from 'react'

export default props =>
    <div>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>

````

**VAI MOSTRAR**

```
Andre Pereira
Mariana Pereira
Pedro Arruda
Gustavo Arruda
```

### Passar `props` dos pais para os filhos

1. O ai recebe uma prorpiedae
2. No seu objeto jsx você a acessa com props.nome_propriedade
3. Passa ela na tag do filho como propriedade

Essaé a forma mais simples de comunicaçâo entre pai => filho

**Como propagar uma  propriedade do pai para os filhos se usa props.children?**

**Forma que funciona só com um elemento**

````jsx
// Familia.jsx

import React from 'react'

export default props =>
  <div>
    
   {/* Você passa para o componente filho pela props na tag*/}
   {React.cloneElement(props.children,
          { sobrenome: props.sobrenome })} 
    
   {/* Clonar o component, e, ao usar o React.cloneE..., você pode passar props a mais*/}
   {React.cloneElement(props.children, { ...props })}
    
   {/* Outra forma */}
   {React.cloneElement(props.children, props)}
    
  </div>        

// index.js

ReactDOM.render(
  <div>
    <Familia sobrenome="Pereira">
        <Membro nome="Andre" />
    </Familia>
  </div>
, elemento)

````

### Passar `props` para mais de um componente

Você tem que usar um `.map()` próprio do `REACT` para mapear para cada componente que vem de `children` fazer um clone de cada um  e por a propriedade

```jsx
React.Children.map(props.children, filho => {
      return React.cloneElement(filho, { ...props })
      })
```

Você também pode colocar esse código numa função

```jsx
// utils/utils.jsx
import React from 'react'

export function filhosComProps(props) {
    return React.Children.map(props.children, filho => {
        return React.cloneElement(filho, { ...props })
    })
}
```

E chamar, assim temos a versão final

```jsx
// Familia.jsx

import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
  <div>
    {filhosComProps(props)}
  </div>
```

````jsx
// index.js

ReactDOM.render(
  <div>
    <Familia sobrenome="Pereira">
        <Membro nome="Andre" />
        <Membro nome="Gustavo" />
        <Membro nome="Amelia" />
    </Familia>
  </div>
, elemento)

````

Dessa forma, vai adicionar a propriedade `sobrenome` para todos os filhos que vinherem dentro do componente `<Familia>` e renderizĺalo.

### Componentes baseados em função

Tambem chamads de componente Fundionais

```jsx
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

```

### Comunicação indireta entre filho => pai (callback)

Você passa via props uma função, e, lá no filho, vocÊ passa um parametro (ou nada) e asism, esse parametro, passar pela funçâo que é um callback e assim, chgea ao pai.

```jsx
// Filho.jsx

import React from 'react'

export default props =>
    <div>
        <button
            onClick={() => props.notificarSaida('Praia')}>
            Vou Sair
        </button>
    </div>

// Pai.jsx

import React from 'react'
import Filho from './Filho'

export default props => {

    const notificarSaidaDoFilho =
        lugar => alert(`Liberado para ${lugar}`)

    return (
        <div>
            <Filho notificarSaida={notificarSaidaDoFilho} />
        </div>
    )
}

```

### Componente baseado em Classe e `state`

Os compoentens baseadasos em classe:

**TEM ESTADO**

Ou seja, se uma variavel interna do componeten baseado em classe for mudada, entâo é renderizado. Se for  um componente baseado em funçâo, isos nâo acontece, a nâo ser que você use `React.Hooks`. Isso porque  React espera que componente baseados em funçâo retorne o JSX do jeito que é.

Exemplo

```jsx
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

// index.js

import ComponenteClasse from './componentes/ComponenteClasse'

ReactDOM.render(
    <div>
    	<ComponenteClasse valor="Sou um componente de classe!" />
    </div>
, elemento)


```

**OBS**: Tudo que está nas `props.` nâo pode ser mudado, elas sâo `read-only`

**O STATE nâo é só ter uma variável interna, é  algo próprio do react**

Para setar no stet, e funcionar você tem que usar `setState()`

## Hooks

*Hooks* são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

link: https://pt-br.reactjs.org/docs/hooks-intro.html

```jsx
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

```

