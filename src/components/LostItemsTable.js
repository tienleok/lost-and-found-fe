import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/bootstrap.min.css'

// import logo from '../images/logo.gif'

const LostItemsTable = (props) => {
  const item = props.item
  return (
    <tr>
    <td> <Link to = { `/showlostitem/${item.id}` } > { item.title } </Link>
    </td>
    <td> { item.category } </td>
    <td> { item.timestamp } </td>
     <td > { item.status } </td>
    </tr>
  )
}

LostItemsTable.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    timestamp: PropTypes.timestamp
  }).isRequired
}

export default LostItemsTable
