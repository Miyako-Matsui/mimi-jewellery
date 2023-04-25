import React, { useEffect, useState } from 'react'
import Item from './Item'
import { getItems } from '../api/items'
import { useParams, Link } from 'react-router-dom'

function Items() {
  const [items, setItems] = useState([])
  const { name: item } = useParams

  useEffect(() => {
    getItems()
      .then((items) => setItems(items))
      .catch((err) => err.message)
  }, [])

  return (
    <div>
      <h2>{items.name}</h2>
      <ul>
        {items.map((i, index) => {
          return (
            <li key={index}>
              <Link to={`/items/${i.name}`}>{i.name}</Link>
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
