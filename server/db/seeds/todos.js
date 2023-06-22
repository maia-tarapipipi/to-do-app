exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
   {id: 1, task: 'Washing', completed: false, priority: 'no'},
  {id: 2, task: 'Fold washing', completed: false, priority: 'no'}
  ]);
};
