import express = require('express')
const router = express.Router()

import db = require('../db/db')

router.get('/', (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.json(tasks)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { TaskName, Priority, Completed } = req.body

  db.addTask({ TaskName, Priority, Completed })
    .then(() => {
      // ignore ids from db function
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.put('/:TaskID', (req, res) => {
  const updateTask = req.params.TaskID
  const { TaskName, Completed } = req.body

  db.updateTask(TaskName, Completed, updateTask)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((error) => {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message })
      }
    })
})

export default router
