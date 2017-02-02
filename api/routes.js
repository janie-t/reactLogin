const express = require("express");
const route = express.Router();

module.exports = function(db) {

  // /api/v1/
  route.get('/users', getAllUsers);
  route.get('/:id/profile', getUserById);
  route.post('/login', login);

  function getAllUsers(req, res, next) {
    db.getAllUsers()
    .then(function(allUsers){
      console.log('api/routes.js ', allUsers);
      res.json(allUsers);
    })
  }

  function getUserById(req, res, next) {
    console.log('api/getUserById', req.params);
    const id = req.params.id
    db.displayUserByID(id)
    .then(function(userData){
      res.json(userData)
    })
  }

  function login(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    db.findByUsername(username)
    .then(function(user){
      console.log('findByUsername returned', user);
    })
  }

  return route;
};
