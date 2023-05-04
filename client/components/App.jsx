import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Items from './Items'
import Item from './Item'
// import Cart from './Cart'

import { CartProvider } from 'react-use-cart'

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route index path="/" element={<Items />} />
          <Route path="items/:id" element={<Item />} />
        </Routes>{' '}
        {/* <Cart />{' '} */}
      </CartProvider>
    </div>
  )
}

export default App
