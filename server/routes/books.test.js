import request from 'supertest'

import server from '../server'
import { getBooks } from '../db/db'

jest.mock('../db/db')

describe('GET /api/v1/books', () => {
  it('responds with books array on getBooks success', () => {
    getBooks.mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          title: 'Dracula',
          author: 'Bram Stoker',
          year: 1897,
          genre: 'Horror, Gothic',
          img: 'drac.jpg',
        },
        {
          id: 2,
          title: 'The Whale Rider',
          author: 'Witi Ihimaera',
          year: 1987,
          genre: 'Novel, children\'s fiction',
          img: 'whale.png'
        },
      ])
    )
    return request(server)
      .get('/api/v1/books')
      .expect(200)
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[1].year).toBe(1987)
      })
  })
  it('responds with 500 and error on getBooks rejection', () => {
    getBooks.mockImplementation(() =>
      Promise.reject(new Error('mock DB error'))
    )
    return request(server)
      .get('/api/v1/books')
      .expect(500)
      .then((err) => {
        expect(err.text).toBe('mock DB error')
      })
  })
})
