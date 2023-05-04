import React, { useEffect, useState } from 'react'
import { getItems } from '../api/items'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Cart from './Cart'

function Items() {
  const { addItem } = useCart()
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
                <img src={item.img} alt={item.name} />
              </Link>
              <button onClick={() => addItem(item)}>Add Cart</button>
            </p>
          )
        })}
      </ul>
      <div>
        <Cart />
      </div>
      <div>
        <Link to={'/'}>main</Link>
      </div>
    </div>
  )
}

export default Items
