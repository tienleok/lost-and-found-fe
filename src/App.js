import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import UserList from './components/users/UserList'
import UserInfo from './components/users/UserInfo'
import UserAdd from './components/users/UserAdd'
import UserEdit from './components/users/UserEdit'
import UserDelete from './components/users/UserDelete'
// import FoundItemList from './components/founditems/FoundItemList'
// import FoundItemInfo from './components/founditems/FoundItemInfo'
// import FoundItemAdd from './components/founditems/FoundItemAdd'
// import FoundItemEdit from './components/founditems/FoundItemEdit'
// import LostItemList from './components/lostitems/LostItemList'
// import LostItemInfo from './components/lostitems/LostItemInfo'
// import LostItemAdd from './components/lostitems/LostItemAdd'
// import LostItemEdit from './components/lostitems/LostItemEdit'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <div className="container">
          <Main />
        </div>
      </Router>
    </ApolloProvider>
  )
}

function Navigation () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className='container'>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/users">Users</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/founditems">Found Items</NavLink></li>
          <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/lostitems">Lost Items</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

function Main () {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/users/new" component={UserAdd} />
      <Route exact path="/users/:_id" component={UserInfo} />
      <Route exact path="/users/:_id/edit" component={UserEdit} />
      <Route exact path="/users/:_id/delete" component={UserDelete} />
      {/* <Route exact path="/founditems" component={FoundItemList} />
      <Route exact path="/founditems/new" component={FoundItemAdd} />
      <Route exact path="/founditems/:_id" component={FoundItemInfo} />
      <Route exact path="/founditems/:_id/edit" component={FoundItemEdit} />
      <Route exact path="/lostitems" component={LostItemList} />
      <Route exact path="/lostitems/new" component={LostItemAdd} />
      <Route exact path="/lostitems/:_id" component={LostItemInfo} />
      <Route exact path="/lostitems/:_id/edit" component={LostItemEdit} /> */}
    </Switch>
  )
}

export default App
