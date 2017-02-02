
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(t){
    t.increments();
    t.string('userName');
    t.string('password');
    t.boolean('isAdmin')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
