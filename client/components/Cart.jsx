import React from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart()
  if (isEmpty) return <p>Your Cart is empty</p>
  return (
    <section
      className="
    cart_container"
    >
      <div>
        <div>
          <p>Cart totalItems: ({totalItems})</p>
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
          <button onClick={() => emptyCart()}>Clear Cart</button>
        </div>
        <div>
          <button onClick={() => totalItems}>Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default Cart
