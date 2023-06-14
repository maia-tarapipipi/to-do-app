exports.seed = async function (knex) {
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task_details: 'coding', priority: 1, completed: false },
    { id: 2, task_details: 'eat lunch', priority: 2, completed: false },
    { id: 3, task_details: 'go home', priority: 3, completed: false },
  ])
}
