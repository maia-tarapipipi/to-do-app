
exports.up = function(knex) {
  return knex.schema.createTable('toDoList', function(table) {
    table.increments('id');
    table.string('task').notNullable();
    table.boolean('completed').notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Todos')
  
};
