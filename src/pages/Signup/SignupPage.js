import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class SignUp extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit (e) {
    e.preventDefault()

    const data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('/api/create-user', data)
      .then(res => {
        this.setState({
          username: '',
          email: '',
          password: ''
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error in CreateItem: ' + err.stack)
      })
  };

  render () {
    return (
      <form onSubmit = { this.onSubmit } >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-6 m-auto" >

              <h3 > Sign Up </h3>

              <div className = "form-group" >
                <label > Name </label>
                <input type = "text" name = "username" className = "form-control" placeholder = "Name" onChange = { this.onChange } />
              </div>

              <div className = "form-group" >
                <label > Login ID / Email address </label>
                <input type = "email" name = "email" className = "form-control" placeholder = "Enter email" onChange = { this.onChange } />
              </div>

              <div className = "form-group" >
                <label > Password </label>
                <input type = "password" name = "password" className = "form-control" placeholder = "Enter password" onChange = { this.onChange } />
              </div>

              <button type = "submit" className = "btn btn-primary btn-block" > Sign Up </button>
              <p className = "forgot-password text-right" >
                Already registered
                < a href = "./login" > sign in ? </ a >
              </p >
            </div>
          </div >
        </div>
      </form >
    )
  }
}

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}
