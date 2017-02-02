const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const request = require('superagent')
const reducer = require('./reducer')
const initialState = require('../state')

// components
const App = require('./components/app')

const Form = require('./components/form')
const Profile = require('./components/profile')

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=> {
	console.log('loggin state', store.getState());
})

const Root = ({store}) => {
	return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={App} />
						<Route path='/login' component={Form} />
						<Route path='/profile' component={Profile} />
					</Route>
				</Router>
			</Provider>
	)
}

document.addEventListener('DOMContentLoaded', (e) => {

  console.log('DOMContentLoaded');
  	const root = document.querySelector('#app')

  	ReactDOM.render(
  		<Root store={store}/>,
  		root
  	)
})
