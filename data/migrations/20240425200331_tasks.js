/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('tasks', table =>{
      table.increments('task_id ')
      table.string('task_description')
      table.string('task_notes')
      table.boolean('task_compleated').defaultTo(false)
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('tasks')
  };
  