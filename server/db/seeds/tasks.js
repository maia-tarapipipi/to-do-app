exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {
      id: 1,
      task: 'Finish my Trellos',
      priority: 'High',
      completed: true,
    },
    {
      id: 2,
      task: 'Laundry',
      priority: 'Low',
      completed: false,
    },
    {
      id: 3,
      task: 'Exercise',
      priority: 'High',
      completed: true,
    },
  ])
}
