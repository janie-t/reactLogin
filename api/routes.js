const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs')

module.exports = function(db) {

  route.get('/:id/profile', getUserById)
  route.post("/login", postLoginData);


  function getUserById(req, res, next){
    const id = req.params.id
    console.log('routes.js req.params.id', req.params.id);
    db.displayUserByID(id)
    .then(function(userData){
      res.json(userData)
    })
  }

  function postLoginData(req, res, next) {
    const username = req.body.username
    db.findUserByName(username)
    .then(function(user){
      res.json(checkPassword(req.body, user[0]))
    })
  }

  function checkPassword(loginEntry, dbEntry){
    if(!dbEntry){
      return {login: false, error: 'Invalid password or username'}
    } else {
        bcrypt.compare(loginEntry.password, dbEntry.password, function(err, response){
          if(response){
            return {id: dbEntry.id, login: true}
          } else {
              return {login: false, error: 'Invalid password or username'}
          }
        })
    }
  }

    return route;
}
