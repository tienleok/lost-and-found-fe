import React, { Component } from 'react'
import '../App.css'
import '../styles/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import LostItemCard from './LostItemCard'

// This is for recommendation engine testing
// Testing for recommending several founditems that matches to a lostitem

class LostItemDetails extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios
      .get('/api/lost-item')
      .then(res => {
        this.setState({
          items: res.data

        })
      })
      .catch(err => {
        console.log('Error from LostItemDetails: ' + err.stack)
      })
  };

  render () {
    const items = this.state.items
    console.log('PrintItem: ' + items)
    let itemList

    if (!items) {
      itemList = 'there is no item recorded!'
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
              <h2 className = "display-4 text-center" > Recommendations </h2>
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

export default LostItemDetails
