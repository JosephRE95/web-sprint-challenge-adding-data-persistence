// tasksModel.js

const db = require('../../data/dbConfig');

function getAllTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select('t.*', 'p.project_name', 'p.project_description');
}

function getTaskById(id) {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .where('t.task_id', id)
    .select('t.*', 'p.project_name', 'p.project_description')
    .first();
}

async function createTask(task) {
  const newTask = {
    ...task,
    task_completed: !!task.task_completed 
  };

  const [taskId] = await db('tasks').insert(newTask);
  return getTaskById(taskId);
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};
