exports.up = (knex) => {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('name')
    table.text('img')
    table.decimal('price')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('items')
}
