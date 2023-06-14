exports.up = function (knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('TaskID').primary()
    table.string('TaskName', 255).notNullable()
    table.integer('Priority').notNullable()
    table.boolean('Completed').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('tasks')
}
