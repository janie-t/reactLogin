const express = require("express");
const route = express.Router();

module.exports = function(db) {

  route.get("/", get);

// /api/v1/data/
// res json
  route.post("/", post);

  function get(req, res, next) {
  db.get()
  }

  function post(req, res, next) {}

  return route;
};
