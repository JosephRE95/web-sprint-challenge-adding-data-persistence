/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('projects', table =>{
      table.increments('project_id')
      table.string('project_name', 20).notNullable().unique()
      table.string('project_description').notNullable()
      table.boolean('project_completed').defaultTo(false)
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('projects')
  };
  