const db = require('../../data/dbConfig');

function getAllTasks() {
  return db('tasks').select(
    'task_id',
    'task_description',
    'task_notes',
    db.raw('CAST(task_completed AS BOOLEAN) AS task_completed')
  );
}

function getTaskById(id) {
  return db('tasks').where('task_id', id).first();
}

async function createTask(task) {
  // Ensure that the task_completed field is stored as a boolean
  const newTask = {
    ...task,
    task_completed: !!task.task_completed // Convert to boolean
  };

  const [taskId] = await db('tasks').insert(newTask);
  return getTaskById(taskId);
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask
};
