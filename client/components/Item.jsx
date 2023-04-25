import React from 'react'

function Item({ item }) {
  return (
    <div className="book_tile">
      <h3>{item.name}</h3>
      <img src={item.img} alt={item.name} />
      <p>{item.price}</p>
    </div>
  )
}

export default Item
