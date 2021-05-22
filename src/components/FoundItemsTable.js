import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'

// import logo from '../images/logo.gif'

const FoundItemsTable = (props) => {
  const item = props.item
  return (
    <tr>
    <td> <Link to = { `/showfounditem/${item.id}` } > { item.title } </Link>
    </td>
    <td> { item.category } </td>
    <td> { item.timestamp } </td>
     <td > { item.status } </td>
    </tr>
  )
}

FoundItemsTable.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp
  }).isRequired
}

export default FoundItemsTable
