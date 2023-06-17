exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(function () {
      return knex('todos').insert([
        {
          id: 1,
          name: 'Finish my Trellos',
          priority: 'High',
          completed: false
        },
        {
          id: 2,
          name: 'Laundry',
          priority: 'Low',
          completed: false
        },
        {
          id: 3,
          name: 'Exercise',
          priority: 'High',
          completed: false
        },
        
      ])
    })
}
