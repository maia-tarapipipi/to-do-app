
exports.up = function(knex) {
  return knex.schema.createTable('Todos', (table) => {
    table.increments('id')
    table.string('task')
    table.string('completed')
    table.string('priority')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Todos')
  
};
