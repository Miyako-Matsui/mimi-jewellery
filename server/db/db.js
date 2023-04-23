const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getItems(db = connection) {
  return db('items').select()
}

module.exports = {
  getItems,
}
