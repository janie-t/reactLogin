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
        <form id='login'>
          <h3>Please Login</h3>
            <fieldset>
              <input ref='username' placeholder='Your Name' type='text' />
            </fieldset>
            <fieldset>
              <input ref='password' placeholder='Your Password' type='password' />
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
    const { dispatch, router } = this.props
    const username = this.refs.username.value
    const password = this.refs.password.value

    request.post('api/v1/login')
      .send({ username, password })
      // .then((response, username) => {   //response is isUser and a text message
      //   dispatch({type: 'UPDATE_USER', payload: username})
      // })
      .end((err, response) => {
        if (err) {
        console.log('error in loginform', err);
        } else if(response.body.isUser === false) {
          this.props.router.push(`/`)
          } else {
              dispatch({type:'UPDATE_USER', payload: response.body.username})
              router.push(`/profile`) // /user/${user.id}/profile
            }
      })
  }
}

module.exports = connect((state) => state)(loginForm)

              // dispatch({type: 'UPDATE_USER', payload: response.body.userName})
