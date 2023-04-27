import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Item({ item }) {
  const location = useLocation()

  const itemData = item ? item : location.state?.item

  return (
    <div className="book_tile">
      {/* <h1>Hello</h1> */}
      <h3>{itemData.name}</h3>
      <img src={itemData.img} alt={itemData.name} />
      <p>{itemData.price}</p>{' '}
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Item
