import { gql } from '@apollo/client'

const GET_USERS = gql`
query GetUsers {
  users {
    id
    username
    password
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
    devices {
      deviceid
    }
    status
    rank
    signupdate
    lostitems {
      id
      title
    }
    founditems {
      id
      title
    }
  }
}
`

const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
    id
    username
    password
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
    devices {
      deviceid
    }
    status
    rank
    signupdate
    lostitems {
      id
      title
    }
    founditems {
      id
      title
    }
    }
  }
`

// export { GET_USERS, GET_USER, CREATE_USER, DELETE_USER, UPDATE_USER }
export { GET_USERS, GET_USER }
