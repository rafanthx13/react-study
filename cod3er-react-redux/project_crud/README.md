# Cadastro de Usuário (Parte do New FrontEnd Moderno)

## Descriçâo do Projeto

CRUD de Usuário: Create, Read, Update e Delete de um usuário. Haverá navagação com `router` e como backen `json-server

## Criando ambiente


### BackEnd

EM uma pasta `backend`:

````
npm init -y
npm i --save json-server@0.13.0 -E

````

Depois vou mudar o arquivo `package.json` para rodar o json-server na porta 3001 (por default é na 3000)

````
"scripts": {
    "start": "json-server --watch db.json --port 3001"
  },
````

### FrontEnd

comando 

````
create-react-app nome_do_meu_projeto
````

Aí vai crir uma pasta ccujo nome é nome_do_meu_projeto


No package.json vou por as dependencias

````
"dependencies": {
    "axios": "0.18.0",
    "bootstrap": "4.1.1",
    "font-awesome": "4.7.0",
    "react-router": "4.2.0",
    "react-router-dom": "4.2.2",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-scripts": "1.1.4"
  }
````

### Para executar tudo:

snpm start nas pasta backend e frontend

## Exemplo de `Router.jsx` e `react-router`

````
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// Componente funcional
export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>
````

O `exact` serve para quando for exatamente `/`, só ai mostra o `Home`. Já o `users/` vai ser sempre users mesmo para qualque coisa que começe com `users` `users/43553534`

**Navegar por link usando react-router**

Use o componente `Link` para navegar entre as páginas ao invez do `<a></a>`

Exemplo

````javascript
// Nav.jsx
import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>
````

**Navegaçâo por Hash ou por Browser**

Aqui foi escolhiido por Browse,r ou seja, ele nâo colcoa um hash. Para mudar de BrowserROuter para HashRouter é so mudad os nomes em todas as tags desse arquivo

````javascript
// App.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
````
