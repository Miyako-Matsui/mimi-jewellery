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
      <ul className="item_container">
        {items.map((item, index) => {
          return (
            <p key={index} className="item_tile item_tile img">
              <Link to={`/items/${item.id}`}>
                <img src={item.img} alt={item.name} />{' '}
              </Link>
            </p>
          )
        })}
      </ul>
      <div>
        <Link to={'/'}>main</Link>
      </div>
    </div>
  )
}

export default Items
