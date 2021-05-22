import React, { Fragment } from 'react'
import logo from '../../images/main-logo.png'
import '../../App.css'

const AboutPage = () => (
  <Fragment >
    <div className="cont-within-cont">
      <div className='logo-cont' >
        <img className='logo-main' src={logo} alt="cur"></img>
      </div >
    </div>

    <h1 align="center" > Help me lah! </h1>
    <div >
      <h3 align="center" >
        A community portal connecting residents of Singapore together
      </h3>
    </div >
    <p align="center">  </p>

    <div >
      <h6 align="center" > An intiative by NUS-ISS MTech SE 2021 - Team 8 students </h6>
    </div >

  </Fragment>
)

export default AboutPage
