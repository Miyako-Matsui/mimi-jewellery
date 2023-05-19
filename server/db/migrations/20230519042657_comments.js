exports.up = (knex) => {
  return knex.schema.createTable('comments', (table) => {
    table.increments('id')
    table.string('name')
    table.integer('date')
    table.text('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('comments')
}
