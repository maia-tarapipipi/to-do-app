exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
        {
          id: 1,
          name: 'Finish my Trellos',
          priority: 'High',
          completed: true
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
          completed: true
        },
        
      ])
    }
