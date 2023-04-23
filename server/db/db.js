const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getBooks,
}

function getBooks(db = connection) {
  return db('books').select()
}
