import express = require('express')
const router = express.Router()
import db = require('../db/db')
import { TodoDraft } from '../../common/todo'

//TODO: add get route
router.get('/', (req, res) => {
  db.getTodos()
    .then((fetchedTodos: TodoDraft[]) => {
      res.json(fetchedTodos)
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'something went wrong rendering data from the db' })
    })
})

//TODO: add post route
router.post('/', (req, res) => {
  const { task_details, priority, completed } = req.body as TodoDraft

  db.addTodos({ task_details, priority, completed })
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err: Error) => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'something went wrong rendering data from the db' })
    })
})

export default router
