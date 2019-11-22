const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos') // vou usar os metodos especificados no todoService
    // assim temos todos os mapeamentos que precisamos

    // O mapemaneto sere tnao para
    // url ::=> http://localhost:3003/api/todos [GET,POST,DELETE]

}