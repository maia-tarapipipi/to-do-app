exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('Todos').del()
  await knex('Todos').insert([
    {id: 2, todo: 'feed the dog', completed: true, priority: 'no'},
    {id: 3, todo: 'watering the plants', completed: false, priority: 'no'},
    {id: 1, todo: 'laundry', completed: false, priority: 'yes'},
  ]);
};
