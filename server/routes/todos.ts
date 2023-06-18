import * as db from '../db/db'
import express from 'express'

const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const todosList = await db.getTodos()
    res.json(todosList)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ err: `Woopsie daisy, can't get what you need :/` })
    }
  }
})

route.post('/', async (req, res) => {
  try {
    const { todoDetails, priority } = req.body
    await db.addTodo({ todoDetails, priority })
    res.sendStatus(201)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).json({ err: `Oh dear! trouble posting :/` })
    }
  }
})

export default route
