/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      id: 1,
      name: 'Green×Green',
      img: 'https://2.bp.blogspot.com/-vrCred91KNs/UR2ivLPQilI/AAAAAAAAMxg/P4h7ILNXyuM/s400/necklace.png',
      price: '5',
      comment_id: 1,
    },
    {
      id: 2,
      name: 'Pink×Green',
      img: 'https://2.bp.blogspot.com/-vrCred91KNs/UR2ivLPQilI/AAAAAAAAMxg/P4h7ILNXyuM/s400/necklace.png',
      price: '5',
      comment_id: 2,
    },
    {
      id: 3,
      name: 'Blue×Green',
      img: 'https://2.bp.blogspot.com/-vrCred91KNs/UR2ivLPQilI/AAAAAAAAMxg/P4h7ILNXyuM/s400/necklace.png',
      price: '5',
      comment_id: 3,
    },
  ])
}
