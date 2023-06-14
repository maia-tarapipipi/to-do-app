import express from 'express'
import * as db from '../db/db'

const router = express.Router()

export default router

//GET todos
router.get('/', async (req, res) => {
  try {
    const todos = await db.getTasks()
    res.status(200)
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Server: Oops, something went wrong getting data')
    }
  }
})

//POST add todo
router.post('/', async (req, res) => {
  try {
    const {task} = req.body
    console.log(`routes: `,task);
    
    const response = await db.addTodo({task, completed: true })
    res.sendStatus(201)
    console.log(response);
    
  } catch (error) {
    if (error instanceof Error) {
      console.error('Server: Oops, something went wrong adding data')
    }
  }
})
