import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Items from './Items'
import Home from './Home'

function App() {
  return (
    <div>
      <h1>Welcome!</h1>
      <Items />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/:name" element={<Items />} />
      </Routes>
    </div>
  )
}

export default App
