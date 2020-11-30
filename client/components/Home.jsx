import React from 'react'
import { connect } from 'react-redux'
import { saveProfileToRedux } from '../actions/index.js'

import Matches from './Matches.jsx'
import Profile from './Profile.jsx'


class Home extends React.Component {
  
  
  componentDidMount () {
    if (!this.props.profile) {
      const loggedInUser = this.props.users.filter(user => user.user_id == this.props.auth.user.id)[0]
      this.props.dispatch(saveProfileToRedux(loggedInUser))
    }
  }

  // submitHandler = (e) => {
  //   e.preventDefault()
  //   this.props.dispatch(addUser({
  //     name: this.state.name,
  //     sign: this.state.sign,
  //   }))
  //   this.setState({
  //     name: '',
  //     sign: ''
  //   })
  // }

  render () {

    const loggedInUser = this.props.profile

    return (
      this.props.profile && (
      <>
        <Profile person={loggedInUser} />
        <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Update </button>
        <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Delete </button>
        <Matches person={loggedInUser} />
      </>
      )
    )
  }
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    users: globalState.users,
    auth: globalState.auth,
    profile: globalState.profile
  }
}

export default connect(mapStateToProps)(Home)
