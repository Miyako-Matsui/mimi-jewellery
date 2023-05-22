const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getItems(db = connection) {
  return db('items').select()
}

function getItem(id, db = connection) {
  return db('items').select().where('id', id)
}

function getComments(id, db = connection) {
  return db('comments').select().where('item_id', id)
}

// function addComent(newCpmment, db = connection) {
//   return (
//     db('comments')
//       .join('items', 'items')
//       //W3D2 joins 10242
//       .insert(newCpmment)
//   )
// }

module.exports = {
  getItems,
  getItem,
  getComments,
  // addComent,
}
