const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {

		//put cases in here

		default:
			return newState
	}
	return newState
}
