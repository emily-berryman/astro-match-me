import React from 'react'
import { connect } from 'react-redux'

import { addProfileToDbAndRedux } from '../actions'

class Form extends React.Component {
  state = {
    name: '',
    sign: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.dispatch(addProfileToDbAndRedux({
      name: this.state.name,
      sign: this.state.sign,
    }))
    this.props.history.push('/home')
    // .catch(err => alert(err.message))
  }

  render () {
    return (
      <div>
        <form className='form'>
          <label className='btn' htmlFor="name">Name: </label>
          <input onChange={this.handleChange} className='input' value={this.state.name} autoFocus={true} name="name" label='Name' type="text"/>
          <br/>

          <label className='btn' htmlFor="sign">Sign: </label>
          {/* <input onChange={this.handleChange} className='input' name="sign" type="text"/>
          <br/> */}

          <select onChange={this.handleChange} className='input' value={this.state.sign} name="sign" type="text" >
            <option value="">Select</option>
            <option value="Aries">Aries</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Pisces">Pisces</option>
            <option value="Gemini">Gemini</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Virgo">Virgo</option>
            <option value="Taurus">Taurus</option>
            <option value="Libra">Libra</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Aquarius">Aquarius</option>
          </select>

          <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect()(Form)
