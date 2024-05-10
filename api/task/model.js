const db = require('../../data/dbConfig');

function getAllTasks() {
  return db('tasks');
}

function getTaskById(id) {
  return db('tasks').where('task_id', id).first();
}

async function createTask(task) {
  const [taskId] = await db('tasks').insert(task);
  return getTaskById(taskId);
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};