import express from 'express'
import * as Path from 'node:path'
import todos from './routes/todos'

const server = express()

server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'))
  })
}

server.use('/api/v1/todos/', todos)

export default server