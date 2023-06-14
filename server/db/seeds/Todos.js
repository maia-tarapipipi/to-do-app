
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Todos').del()
  await knex('Todos').insert([
    {id: 1, task: 'laundry', completed: false, priority: 'yes'},
    {id: 2, task: 'feed the dog', completed: true, priority: 'no'},
    {id: 3, task: 'watering the plants', completed: false, priority: 'no'},
  ]);
};
