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
      name: 'G.G',
      date: '190523',
      body: 'I like it!',
      item_id: '1',
    },
    {
      id: 2,
      name: 'S.Y',
      date: '150523',
      body: 'Thanks!',
      item_id: '2',
    },
    {
      id: 3,
      name: 'M.I',
      date: '170523',
      body: 'Beautiful!',
      item_id: '3',
    },
  ])
}
