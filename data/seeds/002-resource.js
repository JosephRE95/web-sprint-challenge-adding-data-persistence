/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
 
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_name: 'apple', resource_description:15.4},
    {resource_name: 'orange', resource_description:9.4},
    {resource_name: 'grape', resource_description:1.4}
  ]);
};
