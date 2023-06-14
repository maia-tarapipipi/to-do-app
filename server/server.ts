import express from 'express';
import * as Path from 'node:path';
import tasksRouter from './routes/tasks';

const server = express();

server.use(express.json());

// Other middleware and configurations...

server.use('/tasks', tasksRouter); // Mount the tasks router

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')));
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'));
  });
}

export default server;
