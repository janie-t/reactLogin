module.exports = function (knex) {

  return {

    displayUserByID: function (table, id) {
      return knex('users').select('*').where('users.id', id)
    },

    findUserByName: function(username){
      return knex('users').select('*').where('users.username', username).then(users => users[0])
    },

    getAllUsers: function(table, rows){
      return knex('users').select()
    }

  }
}
