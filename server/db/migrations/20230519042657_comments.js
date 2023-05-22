exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('date')
    table.text('body')
    table.integer('item_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
}
