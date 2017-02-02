const debug = require('debug')('components:form')
const React = require('react')
const { Link } = require('react-router')
const { connect } = require('react-redux')
const _ = require('lodash')
const request = require('superagent')

class Form extends React.Component {
  handleClick(e){
    console.log('handleclick here');
    e.preventDefault()
    const { dispatch } = this.props
    const username = this.refs.username.value
    const password = this.refs.password.value

    request.post('api/v1/login')
      .send({ username, password })
      .end((err, response) =>{
        if (err) {
          throw err
        } else if (response.body.login) {
          this.props.router.push(`users/${response.body.id}/profile`)
          }
      })
  }


  render() {
    const { dispatch } = this.props

    return (
      <div>
        <form id="login">
          <h3>Please Login</h3>
            <fieldset>
              <input ref="username" name="username" placeholder="Your name" type="text" />
            </fieldset>
            <fieldset>
              <input ref="password" name="password" placeholder="Your Password" type="password" />
            </fieldset>
            <fieldset>
              <button onClick={this.handleClick.bind(this)}>
                Submit
              </button>
            </fieldset>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(Form)
