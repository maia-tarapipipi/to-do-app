exports.seed = async function (knex) {
  await knex('todos').insert([
    { id: 1, todo_details: 'Brush nails', completed: true, priority: 1 },
    { id: 2, todo_details: 'Paint bed', completed: true, priority: 4 },
    { id: 3, todo_details: 'Make cat', completed: false, priority: 6 },
  ])
}
