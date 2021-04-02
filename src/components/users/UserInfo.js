import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      username
      name {
        displayName
        firstName
        lastName
      }
      birthdate
      gender
      contactnos
      emails
      addresses {
        line1
        line2
        country
        postalcode
        label
      }
      status
      rank
      signupdate
    }
  }
`
function UserInfo (props) {
  UserInfo.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.any
  }

  const [user, setUser] = useState(null)
  const { loading, error, data } = useQuery(GET_USER,
    { variables: { id: props.match.params._id } }
  )

  useEffect(() => {
    try {
      if (!loading && data && data.user !== user) {
        setUser(data.user)
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [loading, data, props])

  if (loading) return 'Loading ...'
  if (error) return `Error! ${error.message}`
  if (!user) return null

  return (
    <div>
      <h2>{user.username}</h2>
      <small>id: {user.id}</small>
      <p>{user.birthdate}</p>
      <p>{user.gender}</p>
      <p>{user.signupdate}</p>
      <div className="btn-group">
        <Link to={`/users/${user.id}/edit`} className="btn btn-primary">Edit</Link>
        <Link to={`/users/${user.id}/delete`} className="btn btn-danger">Delete</Link>
        <Link to="/users" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  )
};

export default UserInfo
