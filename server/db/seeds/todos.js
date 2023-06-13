exports.seed = function (knex) {
  return knex('todos')
    .del()
    .then(function () {
      return knex('todos').insert([
        { id: 1, details: 'do the laundry', completed: false },
        { id: 2, details: 'do the dishes', completed: false },
        { id: 3, details: 'do homework', completed: false },
      ])
    })
}
