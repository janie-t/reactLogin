const clone = require('clone')
const _ = require('lodash')

module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {

		case 'UPDATE_USER':
			newState.username = action.payload
			break;

		default:
			return newState

	}
	return newState
}
