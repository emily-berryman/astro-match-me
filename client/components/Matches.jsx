import React from 'react'
import data from '../../data.json'
import { connect } from 'react-redux'
import Profile from './Profile'

function Matches (props) {
  // when passing in something stored in redux global state it needs to be props.sign or {sign}
  // when referencing and accessing a variable in a json file it needs to be using square bracket notation so that it knows to read the value of the variable

  const userSign = props.person.sign
  const myMatches = data[userSign].top

  const matchedProfiles = matchFilter(props.profiles, myMatches)

  // map over these to display them
  // take list of js objects, so map over these objects & make into another form)
  return (
    <div className = 'profile-wrapper'>
      {matchedProfiles.map(profile => {
        return (
          <Profile key={profile.id} person={profile}/>
        )
      })}
    </div >
  )
}

// Map through the top

function matchFilter (profiles, topArray) {
  // console.log(profiles, topArray)
  profiles = profiles.filter((profile) => {
    // console.log(profile.sign, topArray.includes(profile.sign), topArray)
    return topArray.includes(profile.sign)
  })
  // console.log(profiles)
  return profiles
}
// based on the userSign can we return a list of top matching signs

// THEN see if we can return matching profile people

function mapStateToProps (globalState) {
  return {
    profiles: globalState.users
  }
}

export default connect(mapStateToProps)(Matches)
