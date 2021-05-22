import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'
import moment from 'moment'

// import logo from '../images/logo.gif'

const LostItemCard = (props) => {
  const item = props.item
  return (
    <div className = "card mb-4" >
      <img src = {item.images[0]} alt = "" />
      <div className = "card-body" >
        <h4><Link to = { `/showlostitem/${item.id}` } > { item.title } </Link> </h4>
        <p> { item.description } </p>
        <p> { item.status } </p>
        {item.timestamp &&
        <p> {moment(item.timestamp).format('YYYY-MM-DD')} </p> }
        <p> Possible Matching Items: {item.possibleMatches.length}</p>
      </div>
    </div>
  )
}

LostItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp,
    images: PropTypes.any,
    possibleMatches: PropTypes.array
  }).isRequired
}

export default LostItemCard
