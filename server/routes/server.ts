import path from 'path'
import express from 'express'

import todos from '../routes/todos'

const server = express ()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/todos/', todos)

server.get('*', (req, res) => {
  res.sendFile(path.join('public', 'index.html'))
})



export default server