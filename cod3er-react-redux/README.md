
## Projeto da Calculadora, anotações:

#### CSS com JSX

O JSX nâo é HTML, apra aplicar estilo de CSS, você tem que importar o CS e nastags do HTML colocar 'className' e o nome da clase, ao inveś de "class" do HTML

#### Componentes Baseados em Classe e em FUnçâo:

Baseado em class: Tem estado
Baseado em FUnçâo: Nâo tem função

Dê preferencia a fazer poucos baseados em classe, pois sâo mais difícieis de manter

#### Criar variáveis no CSS

Usnado :root

:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;

}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}

### Métodos de Ciclo de Vida

**Só funciona com componentes baseados em class**

````
// Vai executar antes do objeto está criado
componentWillMount() {
        this.props.search()
    }
````

### Conectar com REdux DevTools no Chrom

````
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
````
