exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id').primary()
    table.string('task_name')
    table.integer('priority')
    table.boolean('completed')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable
}
