exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos')
    .del()
    .then(function () {
      return knex('todos').insert([
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
    })
}
