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

router.get('/:id', (req, res) => {
  const itemId = req.params.id
  //get db data
  dbFuncs
    .getItem(itemId)
    //send on res
    .then((itemRoute) => {
      res.json(itemRoute)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

router.get('/:id/comments', (req, res) => {
  //get db data
  const itemId = req.params.id
  dbFuncs
    .getComments(itemId)
    //send on res
    .then((itemsRoutes) => {
      res.json(itemsRoutes)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

router.post('/:id/comments', (req, res) => {
  console.log(req.body)
  //get db data
  const newComment = req.body
  dbFuncs
    .saveComment(newComment)
    //send on res
    .then((itemsRoutes) => {
      res.json(itemsRoutes)
    })
    .catch((err) => res.status(500).json({ message: err.message }))
})

module.exports = router
