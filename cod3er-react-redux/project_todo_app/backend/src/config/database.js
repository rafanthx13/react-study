/* database.js
  Configurar a conexâo com o mongo através do mongose

*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise // não é importante
module.exports = mongoose.connect('mongodb://localhost/todo')