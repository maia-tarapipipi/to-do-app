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

export default route
