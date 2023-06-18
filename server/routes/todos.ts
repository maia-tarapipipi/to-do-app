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
    await db.addTodo({...req.body, completed: false})
    res.sendStatus(201)    
  } catch (error) {
    if (error instanceof Error) {
      console.error('Server: Oops, something went wrong adding data')
    }
  }
})

//UPDATE edit todo
router.put('/',async (req, res) => {
  try {
    await db.editTodo({priority: 0, ...req.body})
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.error('Server: Oops, something went wrong editing data')
    }
  }
})

//DELETE todo
router.delete('/:id',async (req, res) => {
  try {
    console.log('ROUTE: delete');
    await db.deleteTodo(Number(req.params.id))
    res.sendStatus(200)

  } catch (error) {
    if (error instanceof Error) {
      console.error('Server: Oops, something went wrong deleting data')
    }
  }
})