import React from 'react'

function BookTile({ book }) {
  return (
    <div className='book_tile'>
      <h3>{book.title}</h3>
      <img src={book.img} />
      <p>{book.author}, {book.year}</p>
      <p>{book.genre}</p>
    </div>
  )
}

export default BookTile
