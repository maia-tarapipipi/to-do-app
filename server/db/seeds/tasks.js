exports.seed = function (knex) {
  return knex('tasks')
    .del()
    .then(function () {
      return knex('tasks').insert([
        {
          id: 1,
          task_name: 'make food',
          priority: 'high',
          completed: false,
        },
        {
          id: 2,
          task_name: 'make bed',
          priority: 'high',
          completed: false,
        },
        {
          id: 3,
          task_name: 'make breakie',
          priority: 'high',
          completed: false,
        },
      ])
    })
}
