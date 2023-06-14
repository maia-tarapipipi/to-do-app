import express = require('express')
const router = express.Router()

import db = require('../db/db')

router.get('/', (req, res)=> {
  db.getTodos()
  .then((todos)=> {
    res.json(todos)
  })
  .catch((err) => {
    console.error(err)
    res.status(500).json({ message: 'error in server'})
  })
})

router.post('/', (req, res)=> {

})

export default router