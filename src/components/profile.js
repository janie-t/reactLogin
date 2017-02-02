const debug = require('debug')('components:profile')
const React = require('react')
const { Link } = require('react-router')
const { connect } = require('react-redux')
const _ = require('lodash')
const request = require('superagent')

class Profile extends React.Component {

  render(){
    <div>
      <h1>Welcome back {userName}</h1>
      <h3>Hopefully, looking at this picture will make you happier today</h3>
      <img src="https://i.ytimg.com/vi/zdcAbMwO6Zs/maxresdefault.jpg" width="400px" />
    </div>
  }
}

module.exports = connect((state) => state)(Profile)
