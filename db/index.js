module.exports = function (knex) {

  return {
    getAllUsers: function (table, options) {
      return knex('users').select('*')
    },

    getUserById: function (table, id) {
      return knex('users').select('*').where('users.id', id)
    },

    login: function(username){
      return knex('users').select('*').where('users.username', username)
    }
  }
}
