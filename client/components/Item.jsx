import React, { useState, useEffect } from 'react'
import { getItem } from '../api/items'
import { Link, useParams } from 'react-router-dom'
import Comment from './Comment'

function Item() {
  const { id } = useParams()

  const [item, setItem] = useState([])

  useEffect(() => {
    getItem(id)
      .then((item) => setItem(item))
      .catch((err) => err.message)
  }, [id])

  return (
    <div>
      {item.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="each_item">
          {item.map((item) => (
            <li key={item.id}>
              <li>Name: {item.name}</li>
              <li>$ {item.price}</li>
              <li>
                <img src={item.img} alt={item.name} />
              </li>
            </li>
          ))}
        </ul>
      )}
      <div>
        <Comment />
      </div>
      <div>
        <Link className="link_home" to={'/'}>
          main
        </Link>
      </div>
    </div>
  )
}

export default Item
