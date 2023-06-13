exports.seed = async function (knex) {
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, todo: 'walk the dog' },
    { id: 2, todo: 'cook lunch' },
    { id: 3, todo: 'coding' },
  ])
}
