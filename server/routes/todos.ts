import express from 'express'
import { ToDo, ToDoDraft } from '../../modules/todo'
const router = express.Router()
import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const todos = (await db.getTodos()) as ToDo[]
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

router.post('/', async (req, res) => {
  try {
    const todo = req.body as ToDoDraft
    await db.addTodo(todo)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
