# 1. Fundamentos do React

## Índice

[TOC]

## Links

+ 

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
import React from 'react'


function primeiro() {
  return <h1>Primeiro Compoenente</h1>
}

/*
// Poderia ser
export default function() {
  return <h1>Primeiro COmponente</h1>
}
*/

export default primeiro

````

