
exports.up = function(knex) {
  return knex.schema.createTable('Todos', function(table) {
    table.increments('id');
    table.string('todo').notNullable();
    table.boolean('completed').notNullable().defaultTo(false);
    table.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Todos')
  
};
