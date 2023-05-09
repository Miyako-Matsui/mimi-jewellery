import React from 'react'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'

function CartItems() {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart()

  return (
    <>
      <div>
        <table>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>Name: {item.name}</td>
                  <td>$: {item.price}</td>
                  <td>Quantity: {item.quantity}</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      Remove Item
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div>
        <p>Total price: ${cartTotal}</p>
      </div>
      <div>
        <Link className="link_home" to={'/'}>
          main
        </Link>
      </div>
    </>
  )
}

export default CartItems
