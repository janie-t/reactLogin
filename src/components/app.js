const React = require('react')
const Form = require('./form').default
console.log("Form",Form);

module.exports = function App (props) {
  console.log('props', props)
  const { store, model } = props

  return (
    <div>
      <h1>Welcome to Happy Days</h1>
      <h3>Where everyone becomes a little bit more...happier</h3>
      <div>
        <Form />
      </div><br/>
      <img src="http://www.zarias.com/wp-content/uploads/2015/12/61-cute-puppies.jpg" width="400px" />
    </div>
  )
}
