const debug = require('debug')('components:form')
const React = require('react')
const { connect } = require('react-redux')
const request = require('superagent')

class loginForm extends React.Component {

  render() {
    debug(this.props)
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

  handleClick(e){
    e.preventDefault()
    const username = this.refs.username.value
    const password = this.refs.password.value

    request.post('api/v1/login')
      .send({ username, password })
      .end((err, response) => {
        if (err) {
          console.log('error in loginform', err);
        } else {
          this.props.router.push(`/profile`)
          }
      })
  }
}

module.exports = connect((state) => state)(loginForm)
