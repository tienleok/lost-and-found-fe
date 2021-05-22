import React, { Component } from 'react'
import '../App.css'
// import './Page.css'
import '../styles/bootstrap.min.css'
import { Link } from 'react-router-dom'
import LostItemCard from './LostItemCard'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

class ShowLostItemList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      mitems: [],
      pageNumber: 0,
      itemsPerPage: 6,
      pagesVisited: 0,
      search: null
    }
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount () {
    axios
      .get('/api/lost-items')
      .then(res => {
        this.setState({
          items: res.data,
          mitems: res.data
        })
      })
      .catch(err => {
        console.log('Error from ShowLostItemList: ' + err.stack)
      })
  };

  searchSpace=(event) => {
    const searchkey = event.target.value.toString().toLowerCase()
    var searchitems = this.state.items
    if (searchkey != null) {
      searchitems = searchitems.filter(function (item) {
        return (item.title && item.title.toString().toLowerCase().includes(searchkey)) ||
        (item.description && item.description.toString().toLowerCase().includes(searchkey)) ||
        (item.category && item.category.toString().toLowerCase().includes(searchkey))
      })
    }
    this.setState({ mitems: searchitems })
    this.setState({ pageNumber: 0 })
  }

  changePage = ({ selected }) => {
    this.setState({ pageNumber: selected })
  }

  render () {
    const mitems = this.state.mitems
    // let searchkey = null
    console.log('PrintItem: ' + mitems)
    // itemList

    const pageCount = Math.ceil(mitems.length / this.state.itemsPerPage)
    const mstart = this.state.pageNumber * this.state.itemsPerPage
    const mend = mstart + this.state.itemsPerPage
    const itemList = mitems
      .slice(mstart, mend)
      .map((item, k) =>
                <
                LostItemCard item = { item }
                key = { k }
                />
      )

    return (
      <div className = "ShowLostItemList" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-12" >
              <br />
              <h2 className = "display-4 text-center" > Lost Items List </h2>
             </div>
             <div>
             <input type="text" placeholder="Keyword search" onChange={(e) => this.searchSpace(e)} />

            <div className = "col-md-11" >
              <Link to = "/createlostitem" className = "btn btn-outline-warning float-right" > +Add New Lost Item </Link>
              <br />
              <br />
              <hr />
            </div>
        </div>
        </div>
        <div className = "list" > { itemList }
        </div>   <br></br><div>
        <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={this.changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      /></div>
      <h6> Number of Items {mitems.length} </h6>

      </div>
        </div >
    )
  }
}

export default ShowLostItemList
