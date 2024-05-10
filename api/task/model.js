const db = require('../../data/dbConfig');

function getAllTasks() {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.project_id')
    .select(
      't.task_id',
      't.task_description',
      't.task_notes',
      't.task_completed',
      'p.project_name',
      'p.project_description'
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
