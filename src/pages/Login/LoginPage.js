import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
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
      email: this.state.email,
      password: this.state.password
    }

    axios
      .post('/api/users/' + this.email, data)
      .then(res => {
        this.setState({
          email: '',
          password: ''
        })
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('token', res.data.token)
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error in Signin: ' + err.stack)
        alert('Invalid User -> Logged in Guest User')
      })
    localStorage.setItem('username', 'Test User')
    localStorage.setItem('token', 'testtoken')
    window.location.href = './'
  };

  render () {
    return (
      <form onSubmit = { this.onSubmit } >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-6 m-auto" >
              <br />

              <h4 > Sign In </h4>

              <div className = "form-group" >
                <label > Email address </label>
                <input type = "email" name = "email" onChange = { this.onChange } className = "form-control" placeholder = "Enter email" />
              </div>

              <div className = "form-group" >
                <label > Password </label>
                <input type = "password" name = "password" onChange = { this.onChange } className = "form-control" placeholder = "Enter password" />
              </div>

              <div className = "form-group" >
                <div className = "custom-control custom-checkbox" >
                  <input type = "checkbox" className = "custom-control-input" id = "customCheck1" />
                  <label className = "custom-control-label" htmlFor = "customCheck1" > Remember me </label>
                </div >
              </div>

              <button type = "submit" className = "btn btn-primary btn-block" > Submit </button>
              <p className = "forgot-password text-left" >
                Not registered ?
                < a href = "./signup" > signup </a>
              </p >
            </div>
          </div >
        </div>
      </form >
    )
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}
