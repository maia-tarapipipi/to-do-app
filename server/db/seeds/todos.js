exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(function () {
      return knex('todos').insert([
        {
          id: 1,
          name: 'Finish my Trellos',
          priority: 'High',
          completed: 'No'
        },
        {
          id: 2,
          name: 'Laundry',
          priority: 'Low',
          completed: 'No'
        },
        {
          id: 3,
          name: 'Exercise',
          priority: 'High',
          completed: 'No'
        },
        
      ])
    })
}
