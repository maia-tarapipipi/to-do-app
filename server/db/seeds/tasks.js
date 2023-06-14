exports.seed = function (knex) {
  return knex('tasks')
    .del()
    .then(function () {
      return knex('tasks').insert([
        {
          TaskID: 1,
          TaskName: 'make food',
          Priority: 'high',
          Completed: false,
        },
        {
          TaskID: 2,
          TaskName: 'make bed',
          Priority: 'high',
          Completed: false,
        },
        {
          TaskID: 3,
          TaskName: 'make breakie',
          Priority: 'high',
          Completed: false,
        },
      ])
    })
}
