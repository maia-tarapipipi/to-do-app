import express from 'express'

import * as db from '../db/db'

const route = express.Router()

route.get('/', async (req, res) => {
  try {
    const todos = await db.getList()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

route.post('/', async (req, res) => {
  try {
    const input = req.body
    const ids = await db.addTask(input)
    res.json({ id: ids[0], task: input })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default route