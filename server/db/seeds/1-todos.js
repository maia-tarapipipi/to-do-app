exports.seed = async function (knex) {
  await knex('todos').insert([
    { id: 1, todoDetails: 'Brush nails', completed: 'yes', priority: 1 },
    { id: 2, todoDetails: 'Paint bed', completed: 'no', priority: 4 },
    { id: 3, todoDetails: 'Make cat', completed: 'yes', priority: 6 },
  ])
}
