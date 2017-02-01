const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const api = require('./api')
const session = require('express-session')
const _ = require('lodash')


module.exports = function (db) {

  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  app.set('trust proxy', 1)

  app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

  if (app.get('env') === 'development') {
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const config = require('./webpack.config')
    const webpack = require('webpack')
    const compiler = webpack(config)
    const livereload = require('livereload')
    const lrserver = livereload.createServer()

    lrserver.watch([
      __dirname + "/public",
      __dirname + "/src",
    ])

    app.use(require('inject-lr-script')())

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))
  }

  app.use('/', express.static(path.join(__dirname, 'public'))) //static files

  app.use('/api/v1/data', api.myRoute(db)) //routes

  app.use(function(req, res, next) {
   const err = new Error('Not Found')
   err.status = 404
   next(err)
  })

  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500)
      res.json({
        message: err.message,
        error: err
      })
    })
  }

  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: {}
    })
  })

  return app

}
