/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
 
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_name: 'apple', project_description:15.4, project_completed: null},
    {project_name: 'orange', project_description:9.4, project_completed: null},
    {project_name: 'grape', project_description:1.4, project_completed: null}
  ]);
};
