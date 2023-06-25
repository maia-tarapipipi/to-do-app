/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {
      id: 1,
      details: 'Feed the sheep',
      priority: 1,
      completed: false,
    },
    {
      id: 2,
      details: 'Clean the rabbit hutch',
      priority: 2,
      completed: false,
    },
    {
      id: 3,
      details: 'Mow the lawn',
      priority: 3,
      completed: false,
    },
    {
      id: 4,
      details: 'Run the robot vaccum',
      priority: 4,
      completed: false,
    },
  ])
}
