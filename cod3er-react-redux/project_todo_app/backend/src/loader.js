const server = require('./config/server') // chama o arquivo server
require('./config/database')
require('./config/routes')(server)