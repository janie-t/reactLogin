const debug = require('debug')('components: app')
const _ = require('lodash')
const React = require('react')

const { connect } = require('react-redux')
const { Link } = require('react-router')
const Puppy = require('./puppy')

const App = (props) => {
  debug({props})

  const content = props.location.pathname === '/'
    ? <Puppy />
    : null

  return (
    <div>
      <h1>Welcome to Happy Days</h1>
      <h3>Where everyone becomes a little bit more...happier</h3>
      <div className='nav'>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/login'><li>Login</li></Link>
            <Link to='/profile'><li>Profile</li></Link>
          </ul>
      </div><br/>

      {content}

      {props.children}
    </div>
  )
}
module.exports = connect((state) => state)(App)
