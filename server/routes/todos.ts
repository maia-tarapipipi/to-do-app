import express = require('express')
const router = express.Router()

import db = require('../db/db')

router.get('/', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { todo } = req.body

  db.addTodos({ todo })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.delete('/', async (req, res) => {
  const { id } = req.body
  console.log('this is re.paramas.id:', id)
  db.deleteTodos(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

export default router
