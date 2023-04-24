const express = require('express')
const router = express.Router()

const dbFuncs = require('../db/db')

// Get /api/v1/items
router.get('/', (req, res) => {
  //get db data
  dbFuncs
    .getItems()
    //send on res
    .then((itemsRoutes) => {
      res.json(itemsRoutes)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
