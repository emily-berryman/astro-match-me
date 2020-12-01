import React from 'react'

import { Route } from 'react-router-dom'

import Header from './Header.jsx'
// import Search from './Search.jsx'
import Form from './Form.jsx'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Nav from './Nav'
import Register from './Register.jsx'
import SignIn from './SignIn'
import Home from './Home'
import LandingPage from './LandingPage.jsx'
import { checkAuth } from '../actions/auth.js'


class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(checkAuth())
    this.props.dispatch(fetchUsers())
  }

  render () {
    return (
      
      <div className='app'>
        <Header/>
        {this.props.asshole && (
          <> 
            <Route path='/' component={Nav} />
            <Route exact path='/register' component={Register}/>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/sign-in' component={SignIn}/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/create-profile' component={Form}/>
          </>
        )} 
      </div>
     
    )
  }
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    latestPerson: globalState.latestPerson,
    users: globalState.users,
    asshole: globalState.asshole

  }
}

export default connect(mapStateToProps)(App)
