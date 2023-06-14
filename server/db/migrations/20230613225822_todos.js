
exports.up = function(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id').primary()
    table.string('task')
    table.boolean('completed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('todos')
};
