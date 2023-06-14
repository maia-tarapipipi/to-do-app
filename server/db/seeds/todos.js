
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'clean the dishes', completed: false },
    { task: 'watch Snatch', completed: false },
  ])
}
