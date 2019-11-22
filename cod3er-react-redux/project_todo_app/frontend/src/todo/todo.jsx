import React, { Component } from 'react' // COmponente baseado em classe
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    // Esse this.fun.bind serve para tratar o 'this' para quando for usado nas funçôes internas se referenciar a esse componente, e nâo aso compoenntes do local que serão chamdaos, ou seja, tratando o callback
    // Assim, no componente que chamadr essa funçôes, o this, vai se refereir a esse compontete (ao compontente ) pai
    // Uma outra forma melhora pra mexer com esse métodos seria REDUX
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
    this.handleRemove = this.handleRemove.bind(this)

    this.refresh()
}

// pega a lista mais recente do banco
refresh(description = '') {
  const search = description ? `&description__regex=/${description}/` : ''
  axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => this.setState({...this.state, description, list: resp.data}))
}

handleChange(e) {
  // setSTate serve para mudar o estado de um componeten de classe
  this.setState({...this.state, description: e.target.value })
}

// vai ser dar um refresh com a busca no banco pela descrption passada
handleSearch() {
  this.refresh(this.state.description)
}

// alem de adeiciona, com o 'then' da promisse, el vai atualaizr a lsita
handleAdd() {
  const description = this.state.description
  axios.post(URL, { description })
      .then(resp => this.refresh())
}

handleMarkAsDone(todo) {
  axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => this.refresh(this.state.description))
}

handleMarkAsPending(todo) {
  axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => this.refresh(this.state.description))
}

handleRemove(todo) {
  axios.delete(`${URL}/${todo._id}`)
      .then(resp => this.refresh(this.state.description))
}

handleClear() {
  this.refresh()
}

    render() {
      return (
        <div>
          <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
            <TodoForm 
              description={this.state.description}
              handleChange={this.handleChange}
              handleAdd={this.handleAdd} 
              handleSearch={this.handleSearch}
              handleClear={this.handleClear} 
            />
            <TodoList 
              list={this.state.list}
              handleMarkAsDone={this.handleMarkAsDone}
              handleMarkAsPending={this.handleMarkAsPending}
              handleRemove={this.handleRemove} 
            />
        </div>
      )
    }
}