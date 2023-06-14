import express from 'express'
import { getTodos, addTodo, deleteTodo } from '../db/todos'
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
    res.sendStatus(202)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }

})


route.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  await deleteTodo(id)
  res.sendStatus(203)
})



export default route