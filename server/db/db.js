const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getItems(db = connection) {
  return db('items').select()
}

function getItem(id, db = connection) {
  return db('items').select().where('id', id)
}

function getComments(db = connection) {
  return db('comments').select()
}

module.exports = {
  getItems,
  getItem,
  getComments,
}
