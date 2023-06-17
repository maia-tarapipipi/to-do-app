import express = require('express')
const router = express.Router()

import db = require('../db/db')
import { NewTodo } from '../../models/todos'

router.get('/', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.json(todos)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.post('/', (req, res) => {
  const { name, priority, completed } = req.body as NewTodo

  db.addTodo({ name, priority, completed })
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err: Error) => {
      console.error(err)
      res.status(500).json({ message: 'error in server' })
    })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).json({ message: 'Missing ID in request params' });
  }
  
  db.deleteTodo(Number(id))
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'Error in server' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, priority, completed } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Missing ID in request params' });
  }

  db.updateTodo(Number(id), { name, priority, completed })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'Error in server' });
    });
});




export default router;
