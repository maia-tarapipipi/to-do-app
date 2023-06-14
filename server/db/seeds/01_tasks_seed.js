exports.seed = function (knex) {
    return knex('tasks')
      .del() // Clear existing data from the table
      .then(function () {
        return knex('tasks').insert([
          { details: 'Task 1', priority: 2, completed: false },
          { details: 'Task 2', priority: 1, completed: true },
          { details: 'Task 3', priority: 3, completed: false },
        ]);
      });
  };
  