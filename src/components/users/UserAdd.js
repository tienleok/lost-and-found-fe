import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { gql, useMutation } from '@apollo/client'

const CREATE_USER = gql`
  mutation createUser($userInput: user) {
    createUser(userInput: $userInput) {
      id
      username
    }
  }
`

function UserAdd (props) {
  UserAdd.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.any
  }

  let input
  const [createUser, { data }] = useMutation(CREATE_USER)

  const initialState = { username: '', password: '' }
  const [user, setUser] = useState(initialState)

  function handleChange (event) {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  function handleSubmit (event) {
    try {
      event.preventDefault()
      createUser({ variables: { user } })
      props.history.push(`/users/${data.id}`)
    } catch (error) {
      console.log('error', error)
    }
  }

  function handleCancel () {
    props.history.push('/users')
  }

  return (
    <div>
      <h1>Create User</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input name="username" type="text" value={user.username} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input name="password" type="text" value={user.password} onChange={handleChange} className="form-control" />
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default UserAdd
