
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'eat', priority: "3", completed:"yes"},
    {id: 2, task: 'sleep', priority: "2", completed:"yes"},
    {id: 3, task: 'code', priority: "1", completed:"no"}
  ]);
};
