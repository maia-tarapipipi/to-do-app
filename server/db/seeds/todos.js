
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'clean the dishes', completed: false, priority: 0 },
    { task: 'watch Snatch', completed: false, priority: 0 },
  ])
}
