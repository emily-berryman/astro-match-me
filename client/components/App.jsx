import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header.jsx'
import Search from './Search.jsx'
import Form from './Form.jsx'
import Matches from './Matches.jsx'
import Profile from './Profile.jsx'
import { connect } from 'react-redux'
import {fetchUsers} from '../actions'
import Nav from './Nav'
import Register from './Register.jsx';

// This might need to be turned into a stateful (class-based) component
class App extends React.Component {

    componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  pretendFormComponent = () => {
    return (
      <>
        <Form/>
        {this.props.latestPerson && <Profile person={this.props.latestPerson}/>}
        {this.props.latestPerson && <Matches/>}
      </>
    )
  }

  render() {
  
  return (
    <div className='app'>
      <Header/>
      <Nav />
      {/* <Search/> */}
      <Route exact path='/register' component={Register}/>

      <Route exact path='/' component={this.pretendFormComponent}>
      
      </Route>
    </div>
  )
}
}

function mapStateToProps (globalState) {
  return {
    activePage: globalState.activePage,
    latestPerson: globalState.latestPerson,
    users: globalState.users

  }
}

export default connect(mapStateToProps)(App)




