import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'
// import logo from '../../images/logo.gif'

const HomePage = () => (
    <Fragment >
        <h1 align = "center" > Welcome to helpmelah.com </h1>

        <div className = "container" align = "center" >
            <Button href="/showlostitemlist" variant = "warning" > View Lost Items </Button>
            <Button href="/showfounditemlist" variant = "primary" > View Found Items </Button>
            <Button href="/createlostitem" variant = "success" > Add Lost Item </Button>
            <Button href="/createfounditem" variant = "info" > Add Found Item </Button>
        </div >
    </Fragment>
)

export default HomePage
