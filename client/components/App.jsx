import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Items from './Items'
import Item from './Item'

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="items" element={<Items />} />
        <Route path="items/:id" element={<Item />} />
      </Routes>
    </div>
  )
}

export default App
