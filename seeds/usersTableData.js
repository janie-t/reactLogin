
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, userName: 'Roxy', password: 'Hairy', isAdmin: true}),
        knex('users').insert({id: 2, userName: 'Tiger', password: 'Black', isAdmin: false}),
        knex('users').insert({id: 3, userName: 'Fred', password: 'Sweet', isAdmin: false})
      ]);
    });
};
