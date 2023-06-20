import server from './server';
import express from 'express'
import routes from './routes/todos'

const app = express()

app.use('/api',routes)

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});

