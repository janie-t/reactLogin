const debug = require('debug')('components:form')
const React = require('react')

const Form = function(props) {

  return (
    <div>
      <form id="login" action="/login" method="post">
        <h3>Please Login</h3>
          <fieldset>
            <input name="userName" placeholder="Your name" type="text" />
          </fieldset>
          <fieldset>
            <input name="password" placeholder="Your Password" type="password" />
          </fieldset>
          <fieldset>
            <button type="submit" >Submit</button>
          </fieldset>
      </form>
    </div>
  )
}

export default Form
