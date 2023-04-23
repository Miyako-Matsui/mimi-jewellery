exports.up = (knex) => {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('author')
    table.string('genre')
    table.text('img')
    table.integer('year')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('books')
}
