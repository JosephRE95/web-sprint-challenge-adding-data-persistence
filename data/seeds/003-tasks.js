/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
 
  await knex('tasks').truncate()
  await knex('tasks').insert([
    {task_description: 'apple', task_notes:'helo world', task_completed: true,project_id: 1 },
    {task_description: 'orange', task_notes:'helo world', task_completed: true,project_id: 2 },
    {task_description: 'grape', task_notes:'helo world', task_completed: true, project_id: 3}
  ]);
};
