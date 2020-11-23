import React from 'react'
import { connect } from 'react-redux'


class Form extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.username]: e.target.value,
      [e.target.passowrd]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.dispatch(addUser({
      username: this.state.username,
      password: this.state.password
    }))
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
      <div>
        <form className='form'>
          <label className='btn' htmlFor="name">Username: </label>
          <input onChange={this.handleChange} className='input' value={this.state.username} autoFocus={true} name="name" label='Name' type="text"/>
          <br/>
          <label className='btn' htmlFor="name">Password: </label>
          <input onChange={this.handleChange} className='input' value={this.state.password} autoFocus={true} name="name" label='Name' type="text"/>
          <br/>
      

          <button onClick ={(e) => this.submitHandler(e)} className='text-btn' type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

export default connect()(Form)
