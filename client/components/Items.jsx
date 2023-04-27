import React, { useEffect, useState } from 'react'
import { getItems } from '../api/items'
import { Link } from 'react-router-dom'

function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
      .then((items) => setItems(items))
      .catch((err) => err.message)
  }, [])

  return (
    <div>
      <h2>{items.name}</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={`/items/${item.id}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Items
