
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
   {id: 1, todo: 'Washing', completed: false, priority: 'no'}
  ]);
};
