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

router.post('/', async (req, res) => {
  try {
    const tasks = req.body
    await db.addTask(tasks)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'error in server' })
  }
})

// router.put('/:TaskID', (req, res) => {
//   const updateTask = req.params.TaskID
//   const { TaskName, Completed } = req.body

//   db.updateTask(TaskName, Completed, updateTask)
//     .then(() => {
//       res.sendStatus(200)
//     })
//     .catch((error) => {
//       if (error instanceof Error) {
//         res.status(500).json({ error: error.message })
//       }
//     })
// })

export default router
