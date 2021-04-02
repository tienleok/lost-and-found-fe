import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gql, useQuery } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
    }
  }
`

function UserList () {
  const { loading, error, data } = useQuery(GET_USERS)
  const [users, setUsers] = useState(null)

  useEffect(() => {
    try {
      if (!loading && data && data.users !== users) {
        setUsers(data.users)
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [loading, data])

  if (loading) return 'Loading ...'
  if (error) return `Error! ${error.message}`
  if (!users) return null

  return (
  <div>
    <h2>
      Users
      <Link to="/users/new" className="btn btn-primary float-right">Create User</Link>
    </h2>
    <hr/>
    {users.map((user) => {
      return (
        <div key={user.id}>
          <h4><Link to={`/users/${user.id}`}>{user.username}</Link></h4>
          <small>id: {user.id}</small>
          <hr/>
        </div>
      )
    })}
  </div>
  )
}

export default UserList
