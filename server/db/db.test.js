const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./db')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getBooks', () => {
  it('returns the correct books array', () => {
    return db.getBooks(testDb).then((books) => {
      expect(books).toHaveLength(5)
      expect(books[0]).toHaveProperty('author')
      expect(books[1].year).toBe(2021)
    })
  })
})
