import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Items from './Items'
import Item from './Item'

function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Items />} />
        <Route path="items/:id" element={<Item />} />
      </Routes>
    </div>
  )
}

export default App
