const debug = require('debug')('components:form')
const React = require('react')

const Profile = function(props) {

  return (
    <div>
      <h1>Welcome back {userName}</h1>
      <h3>Hopefully, looking at this picture will make you happier today</h3>
      <img src="https://i.ytimg.com/vi/zdcAbMwO6Zs/maxresdefault.jpg" width="400px" />
    </div>
  )
}

export default Profile
