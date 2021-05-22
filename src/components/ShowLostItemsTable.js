import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TableFilter from 'react-table-filter'
import axios from 'axios'
import ItemRow from './LostItemsTable'

class ShowLostItemsTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount () {
    axios
      .get('/api/lost-items')
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowFoundItemList: ' + err.stack)
      })
  }

  render () {
    const items = this.state.items
    let itemList
    if (!items) {
      itemList = 'there is no item recored!'
    } else {
      itemList = items.map((item, k) =>
            <ItemRow item = { item }
            key = { k } />
      )
    }
    return (
          <>
         <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            { itemList }
            </tbody>
          </Table>
          <TableFilter rows= { items }
           onFilterUpdate={this._filterUpdated}>
           <th filterkey="title">  Title  </th>
          <th filterkey="category"> Category </th>
          <th filterkey="status"> Status </th>
          </TableFilter>
          </>
    )
  }
}
export default ShowLostItemsTable
