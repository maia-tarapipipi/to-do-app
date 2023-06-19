import express = require('express')
import db = require('../db/db')
import { Todo, TodoDraft } from '../../common/todo'

const router = express.Router()

//TODO: add get route
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTodos()
    res.status(200)
    res.json(todos)
  } catch (error) {
    console.error('Server: something went wrong getting data.')
  }
})

//TODO: add post route
router.post('/', (req, res) => {
  const { taskDetails, priority, completed } = req.body as TodoDraft

  db.addTodos({ taskDetails, priority, completed })
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

//DELETE A TODO BY ID
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    console.log(id)
    await db.deleteTodos(id)
    res.status(200)
  } catch (error) {
    console.error('Server: something went wrong deleting data.')
  }
})
export default router
