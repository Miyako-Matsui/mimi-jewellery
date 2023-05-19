/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
      id: 1,
      name: 'GG',
      date: '190523',
      comment: 'I like it!',
    },
    {
      id: 2,
      name: 'GM',
      date: '150523',
      comment: 'Thanks!',
    },
  ])
}
