const React = require('react')
const loginForm = require('./loginForm')
const { connect } = require('react-redux')

const Profile = (props) => {

  const { dispatch, userName } = props
  const username = props.username

  return (
    <div>
      <h1>Welcome back {username}</h1>
      <h3>Hopefully, looking at this picture will make you happier today</h3>
      <img src="https://i.ytimg.com/vi/zdcAbMwO6Zs/maxresdefault.jpg" width="400px" />
    </div>
  )
}

module.exports = connect((state) => state)(Profile)




// module.exports = function (props) {
//   console.log('props', props);
//   const { username } = props
//
//   return (
//       <div>
//         <h1>Welcome back {username}</h1>
//         <h3>Hopefully, looking at this picture will make you happier today</h3>
//         <img src="https://i.ytimg.com/vi/zdcAbMwO6Zs/maxresdefault.jpg" width="400px" />
//       </div>
//   )
// }
