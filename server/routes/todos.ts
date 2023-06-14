import express from 'express'
import { getTodos, addTodo } from '../db/todos'
import { Todo, TodoDraft, todoDraftSchema } from '../../models/todos'

const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

route.post('/', async (req, res) => {
  try {
    const input = req.body as TodoDraft
    const newTodo = todoDraftSchema.parse(input)
    await addTodo(newTodo)
    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }

})



export default route