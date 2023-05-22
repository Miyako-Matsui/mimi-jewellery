exports.up = (knex) => {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('name')
    table.text('img')
    table.integer('price')
    table.integer('comment_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('items')
}
