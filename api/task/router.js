// build your `/api/tasks` router here
const express = require('express');
const router = express.Router();
const tasksModel = require('./model');

// POST /api/tasks
router.post('/', async (req, res) => {
  try {
    const task = await tasksModel.createTask(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await tasksModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
});

// GET /api/tasks/:id
router.get('/:id', async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await tasksModel.getTaskById(taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve task' });
  }
});

module.exports = router;
