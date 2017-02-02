const React = require('react')
const Form = require('./form')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const request = require('superagent')

const App = (props) => {

  const { userName } = props

  return (
    <div>
      <h1>Welcome to Happy Days</h1>
      <h3>Where everyone becomes a little bit more...happier</h3>
      <div>
        <Form />
      </div><br/>
      <img src="http://www.zarias.com/wp-content/uploads/2015/12/61-cute-puppies.jpg" width="400px" />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
