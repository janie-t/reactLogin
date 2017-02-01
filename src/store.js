const request = require('superagent')
require('superagent-as-promised')(request)

module.exports = function (model) {

  const listeners = []

  return {

    subscribe: function (listener) {
      listeners.push(listener)
    },

    update: function (key, update) {
      model[key] = update
      console.log('model after update:', model)
      this.notify(model)
    },

    notify: function (model) {
      listeners.forEach(function (listener) {
        listener(model)
      })
    }
    
  }
}
