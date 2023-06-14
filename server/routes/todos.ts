import express, { Request, Response } from 'express';
import * as db from '../db';

const router = express.Router();

//--- GET REQUESTS ---//

//GET ALL TODOS
router.get('/', async (req: Request, res: Response) => {
  try {
    const todos = await db.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todos.' });
  }
});



//GET A TODO GIVEN ITS ID
router.get('/:id', async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);
  try {
    const todo = await db.getTodoById(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found.' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todo.' });
  }
});

//GET TODOS BASED ON GIVEN PRIORTIY (TRUE OR FALSE)
router.get('/completed/:isCompleted', async (req: Request, res: Response) => {
  const isCompleted = req.params.isCompleted === 'true';
  try {
    const todos = await db.getTodosByCompletion(isCompleted);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve todos.' });
  }
});



//--- POST REQUESTS ---//

//ADD A NEW TODO
router.post('/', async (req: Request, res: Response) => {
  const { todo, priority } = req.body;
  const newTodo = { todo, priority };

  try {
    await db.addTodo(newTodo);
    res.status(201).json({ message: 'Todo added successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add todo.' });
  }
});



//--- PATCH REQUESTS ---//


//UPDATE COMPLETION OF A TODO GIVEN ITS ID
router.patch('/complete/:id', async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);
  try {
    await db.completeTodo(todoId);
    res.json({ message: 'Todo completed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to complete todo.' });
  }
});

//UPDATE A TODO GIVEN ITS ID AND NEW TODO TEXT
router.patch('/:id', async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);
  const updatedTodo = { id: todoId, todo: req.body.todo };

  try {
    await db.updateTodo(updatedTodo);
    res.json({ message: 'Todo updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo.' });
  }
});

//UPDATE PRIORITY OF A TODO GIVEN ITS ID AND A NEW PRIORITY
router.patch('/priority/:id', async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);
  const updatedTodoPriority = { id: todoId, priority: req.body.priority };

  try {
    await db.updateTodoPriority(updatedTodoPriority);
    res.json({ message: 'Todo priority updated successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update todo priority.' });
  }
});



//--- DELETE REQUESTS ---//

//DELETE ALL COMPLETED TODOS WHERE IS_COMPLETED IS TRUE
router.delete('/completed', async (req: Request, res: Response) => {
  try {
    await db.clearCompletedTodos();
    res.json({ message: 'Completed todos cleared successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear completed todos.' });
  }
});

//REMOVE A TODO GIVEN ITS ID
router.delete('/:id', async (req: Request, res: Response) => {
  const todoId = Number(req.params.id);
  try {
    await db.removeTodo(todoId);
    res.json({ message: 'Todo removed successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove todo.' });
  }
});

export default router;
