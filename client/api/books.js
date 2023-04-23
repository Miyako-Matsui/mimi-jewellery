import request from 'superagent'

export function getBooks() {
  return request.get('/api/v1/books')
    .then(res => res.body)
}
