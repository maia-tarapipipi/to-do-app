import express = require('express')
const router = express.Router()

import db = require('../db/db')
import { NewTask } from '../../models/tasks'

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
  const { name, priority, completed } = req.body as NewTask

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

router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const { name, priority, completed } = req.body as NewTask;

  db.updateTodo(taskId, { name, priority, completed })
    .then(() => {
      res.sendStatus(200);
      return null;
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'error in server' });
    });
});

router.delete('/:id', (req, res) => {
  const taskId = req.params.id;

  db.deleteTodo(taskId)
    .then(() => {
      res.sendStatus(200);
      return null;
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json({ message: 'error in server' });
    });
});



export default router