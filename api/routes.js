const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs')
const session = require('express-session')

module.exports = function(db) {

  route.get('/:id/profile', getUserById)
  route.post('/login', postLoginData);


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
    console.log('routes.js req.body', req.body);
    db.findUserByName(username)
    .then(user => {
      if(!user) {
        return res.json({message: 'User is not in the database', isUser: false})
      } else if( user.password === req.body.password){
          req.session.isAuthenticated = true
          req.session.isAdmin = user.isAdmin
          res.json({message: 'Welcome back. You are logged in.', username: username})
        } else {
            return res.json({message: 'Do you need a password reminder?', isUser: false})
          }
    })
  }

  function isAuthenticated(req, res, next){
    console.log('req.session', req.session);
    if(req.session.isAuthenticated === true){
      next()
    } else {
        res.redirect('/login')
      }
  }

  function isAdmin(req, res, next){
    if(req.session.isAdmin === true){
      next()
    } else {
        res.json({message: 'Sorry, computer says NO'})
      }
  }

  return route;

}
