import express from 'express'
import * as Path from 'node:path'

const server = express()

import todosRoutes from './routes/todos'

server.use(express.json())
server.use('/api/vi/todos', todosRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'))
  })
}

export default server
