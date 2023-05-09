import React from 'react'
import { useCart } from 'react-use-cart'
// import CartItems from './CartItems'
import { Link } from 'react-router-dom'

function Cart() {
  const { isEmpty, totalItems, emptyCart } = useCart()
  if (isEmpty) return <p>Your Cart is empty</p>
  return (
    <section
      className="
    cart_container"
    >
      <div>
        <div>
          <button className="cart_button">
            <Link to="/cart">Cart totalItems: ({totalItems})</Link>
          </button>
        </div>
        <div>
          <button className="cart_button" onClick={() => emptyCart()}>
            Clear Cart
          </button>
        </div>
        <div>
          <button className="cart_button" onClick={() => totalItems}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
