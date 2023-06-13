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
      details: 'Washing',
      priority: 1,
      completed: false,
    },
    {
      id: 2,
      details: 'Dishes',
      priority: 2,
      completed: false,
    },
    {
      id: 3,
      details: 'Mow Lawns',
      priority: 3,
      completed: false,
    },
    {
      id: 4,
      details: 'Vaccum',
      priority: 4,
      completed: false,
    },
  ])
}
