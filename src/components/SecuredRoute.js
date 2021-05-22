import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

function SecuredRoute (props: RouteProps): React.ReactElement {
  let isAuthenticated = null
  isAuthenticated = localStorage.getItem('username')
  const { component: Component, ...rest } = props
  const render = props => {
    if (isAuthenticated == null) {
      // return <Redirect to="/login" />
      return <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    }
    return <Component {...props} />
  }

  return <Route {...rest} render={render} />
}

export default SecuredRoute
