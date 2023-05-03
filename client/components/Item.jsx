import React, { useState, useEffect } from 'react'
import { getItem } from '../api/items'
import { Link, useParams } from 'react-router-dom'

function Item() {
  const { id } = useParams()

  const [item, setItem] = useState([])

  useEffect(() => {
    getItem(id)
      .then((item) => setItem(item))
      .catch((err) => err.message)
  }, [id])

  console.log('item', item)
  return (
    <div>
      <h1>Item ID: {id}</h1>
      {item.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {item.map((item) => (
            <li key={item.id}>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Link to={'/'}>Home</Link>
      </div>
    </div>
  )
}

export default Item
