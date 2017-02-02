const express = require('express');
const route = express.Router();
const bcrypt = require('bcryptjs')

module.exports = function(db) {

  route.get('/allusers', getAllUsers)

  route.post("/login", post);


  function getAllUsers(req, res, next)

  function post(req, res, next) {
    console.log("req.body", req.body);
    req.session.username = req.body.username
    req.session.password = req.body.password
    const username = req.session.username
    const password = req.session.password
    const user = _.find(users, { 'username': name })

    if(!user){
      return res.redirect('/login')
      } else if( user.password === req.body.password ){
          req.session.isAuthenticated = true
          req.session.isAdmin = user.isAdmin
          res.redirect('/profile')
        } else {
          return alert('Do you need a password reminder?')
          }

    }

  return route;
};
