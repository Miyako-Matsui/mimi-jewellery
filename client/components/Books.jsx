import React, { useEffect, useState } from 'react'

import BookTile from './BookTile'
import { getBooks } from '../api/books'

function Books() {
  const [books, setBooks] = useState([])
  const [errMsg, setErrMsg] = useState(null)

  useEffect(() => {
    getBooks()
      .then(booksArr => setBooks(booksArr))
      .catch(err => setErrMsg(err.message))
  }, [])

  return (
    <div>
      <h2>Books</h2>
      {errMsg && <p style={{ color: 'red' }}>{errMsg}</p>}
      <div className='book_container'>
        {books.map(book => <BookTile book={book} />)}
      </div>
    </div>
  )
}

export default Books
