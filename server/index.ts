import server from './server';
import express from 'express'
import routes from './routes/todos'

const app = express()


const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

