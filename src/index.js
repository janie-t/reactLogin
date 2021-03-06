//logs
const debug = require('debug')('index')
localStorage.debug = '*'

//modules
const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const reducer = require('./reducer')
const initialState = require('../state')

// components
const App = require('./components/app')
const LoginForm = require('./components/loginForm')
const Profile = require('./components/profile')

const store = createStore(reducer, initialState)

const Root = ({store}) => {
	return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path='/' component={App} store={store}>
						<Route path='/login' component={LoginForm} />
						<Route path='/profile' component={Profile} />
					</Route>
				</Router>
			</Provider>
	)
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#app')
	ReactDOM.render(
  	<Root store={store}/>,
  	root
  )
})
