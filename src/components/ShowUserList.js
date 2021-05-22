import React, { Component } from 'react'
import '../App.css'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LostItemCard from './LostItemCard'

class ShowUserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios
      .get('/api/users')
      .then(res => {
        this.setState({
          items: res.data

        })
      })
      .catch(err => {
        console.log('Error from ShowUserList: ' + err.stack)
      })
  };

  render () {
    const items = this.state.items
    console.log('PrintItem: ' + items)
    let itemList

    if (!items) {
      itemList = 'there is no item recored!'
    } else {
      itemList = items.map((item, k) =>

                <
                LostItemCard item = { item }
                key = { k }
                />

      )
    }
    return (
      <div className = "ShowLostItemList" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-12" >
              <br />
              <h2 className = "display-4 text-center" > Items List </h2>
            </div>

            <div className = "col-md-11" >
              <Link to = "/createitem" className = "btn btn-outline-warning float-right" > +Add New Item </Link>
              <br />
              <br />
              <hr />
            </div>
        </div>

        <div className = "list" > { itemList } </div>
        </div >
      </div>
    )
  }
}

export default ShowUserList
