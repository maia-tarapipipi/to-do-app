import express from 'express'
const router = express.Router()

import * as db from '../db/db'

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getTasks()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    res.json(await db.getTaskById(Number(req.params.id)))
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error getting single task in server' })
  }
})

router.post('/', async (req, res) => {
  try {
    const taskData = req.body
    await db.addTasks(taskData)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const taskData = {
      details: req.body.details,
      priority: req.body.priority,
      completed: !req.body.completed,
    }
    const id = Number(req.params.id)
    await db.updateTask(id, taskData)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

export default router
