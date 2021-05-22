import React, { Component } from 'react'
// import { useHistory } from 'react-router-dom'

export default class Logout extends Component {
  logout = () => {
    localStorage.setItem('token', '')
    localStorage.setItem('username', '')
    window.location.href = '/'
  }

  render () {
    return (
        <form onSubmit = { this.logout } >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-6 m-auto" >
              <br />

              <h4 >Thank you for using helpmelah.com
 </h4>
              <p>
                Hope this is useful to you!
              </p >

              <button type = "submit" className = "btn btn-primary btn-block" > Logout </button>
            </div>
          </div >
        </div>
      </form >

    )
  }
}
