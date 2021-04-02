import PropTypes from 'prop-types'
import { gql, useMutation } from '@apollo/client'

const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
      username
    }
  }
`

function UserDelete (props) {
  UserDelete.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    match: PropTypes.any
  }

  const [deleteUser] = useMutation(DELETE_USER)

  deleteUser({ variables: { id: props.match.params._id } })
  props.history.push('/users')
};

export default UserDelete
