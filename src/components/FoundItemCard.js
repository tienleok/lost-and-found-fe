import React from 'react'
import PropTypes from 'prop-types'
// import Container from 'react-bootstrap/Container'
// import { Card } from 'react-bootstrap'
import moment from 'moment'

import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'

// import logo from '../images/logo.gif'

const FoundItemCard = (props) => {
  const item = props.item
  return (
    <div className = "card mb-4" >
    <img src = {item.images[0]} alt = "" />
    <div className = "card-body" >
      <h4><Link to = { `/showfounditem/${item.id}` } > { item.title } </Link> </h4>
      <p> { item.description } </p>
      <p> { item.status } </p>
      {item.timestamp &&
      <p> {moment(item.timestamp).format('YYYY-MM-DD')} </p> }
      <p> Possible Matching Items: {item.possibleMatches.length}</p>
    </div>
  </div>

  )
}

FoundItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.any,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp,
    possibleMatches: PropTypes.array
  }).isRequired
}

export default FoundItemCard
