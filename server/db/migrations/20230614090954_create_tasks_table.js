/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('tasks', function (table) {
      table.increments('id').primary();
      table.string('details').notNullable();
      table.integer('priority').notNullable();
      table.boolean('completed').notNullable().defaultTo(false);
    });
  };
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('tasks');
  };
  
