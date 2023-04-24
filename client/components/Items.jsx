import React, { useEffect, useState } from 'react'
import ItemName from './ItemName'
import { getItems } from '../api/items'

function Items() {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems()
      .then((items) => setItems(items))
      .catch((err) => err.message)
  }, [])

  return (
    <div>
      <h2>Books</h2>

      <div>
        {items.map((item) => (
          <ItemName item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Items
