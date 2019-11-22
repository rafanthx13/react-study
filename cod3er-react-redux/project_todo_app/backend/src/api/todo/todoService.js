/*
Recebo o que esta em 'module.exports' no todo.js
*/

const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// Quando atualizar eu quero receber a row atualizada
// Por default, ele não valida as validações os updates, a nâo ser que você especifique (por isso colocamos)
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo