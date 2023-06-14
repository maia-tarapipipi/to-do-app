exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('TaskID').primary()
    table.string('TaskName', 255)
    table.integer('Priority')
    table.boolean('Completed')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable
}
