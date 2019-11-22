# Redux

## links
+ https://medium.com/@hliojnior_34681/entenda-react-e-redux-de-uma-vez-por-todas-c761bc3194ca
+ https://react-redux.js.org/introduction/quick-start
+ https://css-tricks.com/learning-react-redux/
+ https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf

# o que é redux
+ Redeux é um FrameWork separado do Redux. 
+ Para usalo precisa do `redux` e de 
`react-redux` para intgrar com o react



------------------
Teoricamente falando, o Redux seria um controlador de estados geral para sua aplicação. Compartilhar estados entre vários componentes diferentes se torna uma coisa muito fácil quando o utilizamos. O Redux é basicamente divido em 3 partes: store, reducers e actions.


## Porque existe

+ A comunicaçâo direta entre componetne tende a gerar acoplamentos entre eles (um depende do outro).

## Como funciona

+ O redux cria um estado separado de todos os compmoentnes cahamdo `store`. Apartir desse, todos os componentes acesasm o stores
  - O estado se torna um objeto único
+ Componentes se registram nesse stre, assim, se algo nesse store mudar, sua aplicaçâo pode reagir a isso.

OBS: Uma vez usando o react-reduex, nâo precisa mais usar os stae de componentes de classe

## na pratica

import { connect } from "react-redux"

**reducers**: são funções

----------------------

## Redux - Etapas

#### 1. Reducers
**Reducers**: Responsável por definir o estado inicial de um dado no store e lidar com o GET e SET de acordo com a `action.type` que vier. Em caso defaul retona o próprio objeto (GET).
+ É recomendável por os TYPEs de `action.types` em um arquivo separado.

#### 2. ActionCreator

**ActionCreator**: Define a chamada de reducers, sâo funçẽs para chamar dentro do componente para pegar o store.
+ Em geral é passado um objeto com dois dados `{type: 'ACTION', payload}` sendo que simente 
  - `type` é obrigatório e serve para o redurces saber qual ação adotar
  - `payload` é o dado em sim, esse é um nome padrão de convensão.

#### 3. Provider e `store`

**Provider**: Tag que deve ficar na raiz da aplicação (em geral, no `index.jsx`) nela é passado o store para ser possível acessar na aplicação

**`store`**: É o store, que deve ser o centro úncio dos dados. Deve-se existir somente um inserido no  `index.jsx` para crialó precisa de:
+ `createStore`: Deve chamar essa funçâo sobre `combineRedurces` dos reducers
+ `combineRedurces`: Importa os Redurces e juntaos com essa função

#### 4. Usar react-redux no componente

###### 4.1 importar `connect`
`import { connect } from 'react-redux'`

+ O connect decora o componente, entâo, se antes costumava exportar o componente como default, agora separe-o como variável e na hora de exportalo, exporte aplicando o connect.

````
export default connect(..., "varios decorator", ... )(MyComponent)
````

Isso se for usar dados do store

###### 4.2 Linkar dados do store com as `props`

É necessário fazer dois imports, a função
````
import { bindActionCreators } from 'redux' // linkar actions a esse componente
````

Depois, separado do componente cria a seguinte constante que será o mapemaneto das `props` do componente com o store:

````
const mapStateToProps = state => ({description: state.todo.description})
````

Em seguida no `connect`

````
export default connect(mapStateToProps)(MyComponent)
````

####### 4.3 Linkar `actions` com as `props` para poder alterar o `store`

Faça `import` de `bindActionsCreators` e importe as `ActionsCreators`

````
import { bindActionCreators } from 'redux' // linkar actions a esse componente
import { markAsDone, markAsPending, remove } from './todoActions' // as action
````
como o `mapStateToProps`, crie uma constante separada
````
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
````
Agora o Export fica:
````
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
````

----------------------


## integrar todoapp com redux

### 1. Criar o reducer

Temque passar `..state` pois o reducer só evolui, nâo apaga
````js
const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
	// Quando a açâo for gerada (adicionar), vai limpar o input
        default:
            return state
    }
}
````
O reduce é o handle para um dado, tanto apra SET quanto GET/POST/PU ele

### 2. arquivo para fazer o combine reduce 

````
src/main/reducers.js
import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer

````

Combinar todos os reducer, é uma etapa anterior a criaçâo do store

### 3. Modificando o index.jsx

````
import { createStore } from 'redux' 
import { Provider } from 'react-redux' // tag para conectar a app o store
import reducers from './main/reducers' // centralizador de redurces

const store = createStore(reducers)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'))
````
Aqui estou criando a sotre e deixando-a disponível para toda a aplicação

### 4. Conectar com o redux

OBS: Antes agente dava um export no conponte direto, se agente for usad coisa do store, ele deve ser uma variável. Na hora de expostar ele será `decorado` pelas coisa do redux

De inicio no `src/todo/todolist.jsx` importamos as seguinte coisas
````
import { connect } from 'react-redux' // para conecta com o store
import { bindActionCreators } from 'redux' // linkar actions a esse componente
import { markAsDone, markAsPending, remove } from './todoActions' // as action
````

**Ligar `props` com o `store`**

Depois vou mapear do store para props:
````
const mapStateToProps = state => ({list: state.todo.list})

````
`mapStateToProps` vai ensiar ao redux que parte do store liga com a props desse componente.
Com isso, no compoennte, `props.list` será um dado da store

Depois vou ligar os mapeamentos com o componente utilizando o padrão `Decorator` (`connect` retorna uma função que vai ter como parâmetro `TodoList`)
````
export default connect(mapStateToProps)(TodoList)

````
**Ligar actions com o `props` para poder usálas**

Cria `mapDispatchToProps` da forma abaixo e o usa no connect como decorator

````
const mapDispatchToProps = dispatch => 
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

````

Assim, `add`, `changeDescription`, `search`, `clear` serão props nesse compoentne, que ao ser chamada no componente como em 

````js
<IconButton style='primary' icon='plus' onClick={() => add(description)}></IconButton>
````

## Middlewares

As actions do jeito que estamos fazendo nao sao capazes de lidar com promisse e outra coisa com elas, pois, ao executar uma action ela automaticamente vai disparar o reducers. Entâo vamos por um MiddleWare para lidar com isso.

Segue o Parâo `ChainOfResponsability`

### Como coloacr MIddlewWares

em index.js


````js
import { applyMiddleware, createStore } from 'redux' // alem de imortar o criadorDeStore, importe a funçâo para aplciar o midleware

// IMportando midlewares, lees sâo dependenicas
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
````

Na hora de criar o store, ai fica difeernrte, vc usa applyMiddleware com os midlewares da forma abaixo:

````js
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
````

##### `redux-promisse` : lidar com promisse dentro de uma action

Com ese midleware consegigo fazer com que o reducre espere a promisse que vai ser executada no axios

````js
export const search = () => {
	const request = axios.get(`${URL}?sort=-createdAt`)
	return {
		type : "TODO_SEARCHED",
		payload : request
	}
}
````

#### `redux-multi` : dipsarar action de ntro de uma action

Serve para dentro de um action retornar nâo mais um objeto com type.action, mas sim, para poder retonar um array que elaem de ter ese objeto sej apossivel por ouras actions nesse array.

Problema: Ele executa as actins de ntro do array em paralelo.


````
import multi from 'reduz-multi'
````

Assim de 

````js
export const add = (description) => {
	const request = axios.post(URL, {description})
	return {
		type : "TODO_ADDED",
		payload : request
	}
}

````

Vai virar


````js
export const add = (description) => {
	const request = axios.post(URL, {description})
	return [
		{ type : "TODO_ADDED", payload : request },
		search()
	]
}

````

Problema: QUermeos que `search()` seja executado depois da ação do "TODO_ADDED", mas ele execuuta ambos em pralelelo, entâo, muita vezes nâo vai fazer isso.

Uma forma para que fique sincronizado é outro midleware `react-trunk`

###### `react-trunk`

Envez de retornar uma action (normal) ou um array de actions (`reeact-multi`) com ele retornamos o dispath o chamador. Como o dispath é uma funçâo você pode dentro elxecutar actions de forma seuquncial.

Assim o exeplo anterior fica:

````js
export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}
````

**getState**

Você pode usar o método `getState()` para pegar o estado store direto dentro dea action

````js
export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}))
    }
}
````






