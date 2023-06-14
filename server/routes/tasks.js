const express = require('express');
const router = express.Router();
const knex = require('../db/connection');

// Get all tasks
router.get('/', async (req, res) => {
    try {
      const tasks = await knex('tasks').select('*');
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Add a new task
  router.post('/', async (req, res) => {
    try {
      const { details, priority, completed } = req.body;
      const newTask = await knex('tasks').insert({ details, priority, completed });
      res.status(201).json(newTask);
    } catch (error) {
      console.error('Error adding task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a task
  router.put('/:taskId', async (req, res) => {
    try {
      const { taskId } = req.params;
      const { details, priority, completed } = req.body;
      await knex('tasks').where('id', taskId).update({ details, priority, completed });
      res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Delete a task
  router.delete('/:taskId', async (req, res) => {
    try {
      const { taskId } = req.params;
      await knex('tasks').where('id', taskId).del();
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports = router;