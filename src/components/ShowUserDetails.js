import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import '../App.css';
import '../styles/bootstrap.min.css'
import axios from 'axios'

class ShowUserDetails extends Component {
  constructor (props) {
    super(props)
    console.log('Print id 1: ')

    this.state = {
      id: '',
      title: '',
      category: '',
      description: '',
      status: '',
      timestamp: '',
      location: '',
      image: '',
      keyword: '',
      comments: '',
      votes: '',
      item: {}
    }
  }

  componentDidMount () {
    axios
      .get('/api/lost-item/' + this.props.match.params.id)
      .then(res => {
        // console.log("Print-showItemDetails-API-response: " + res.data);
        this.setState({
          id: res.data.id,
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
          status: res.data.status,
          timestamp: res.data.timestamp,
          location: res.data.location,
          image: res.data.image,
          keyword: res.data.keyword,
          comments: res.data.comments,
          votes: res.data.votes
        })
      })
      .catch(err => {
        console.log('Error from ShowItemDetails: ' + err.stack)
      })
  };

  onDeleteClick (id) {
    axios
      .post('/api/delete-user/' + this.state.id)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error form ShowItemDetails_deleteClick:' + err.stack)
      })
  };

  render () {
    // const item = this.state.item
    const Item =
      <div className = "container" >
        <div className = "col-md-8 m-auto" >
          <div className = 'form-group' >
            <label htmlFor = "title" > Title </label>
            <input type = 'text' placeholder = 'Title' name = 'title' readOnly className = 'form-control' value = { this.state.title } />
          </div>
          <br />

          <div className = 'form-group' >
            <label htmlFor = "category" > Category </label>
            <input type = 'text' placeholder = 'Category' name = 'category' readOnly className = 'form-control' value = { this.state.category } />
          </div >
          <br />

          <div className = 'form-group' >
            <label htmlFor = "description" > Description </label>
            <input type = 'text' placeholder = 'Description' name = 'description' readOnly className = 'form-control' value = { this.state.description } />
          </div >

          <div className = 'form-group' >
            <label htmlFor = "status" > Status </label>
            <input type = 'text' placeholder = 'Status' name = 'status' readOnly className = 'form-control' value = { this.state.status } />
          </div >

          <div className = 'form-group' >
            <label htmlFor = "timestamp" > Date </label>
            <input type = 'date' name = 'timestamp' readOnly className = 'form-control' value = { this.state.timestamp } />
          </div >

          <div className = 'form-group' >
            <label htmlFor = "location" > Location </label>
            <input type = 'text' placeholder = 'Location' name = 'location' readOnly className = 'form-control' value = { this.state.location } />
          </div >
          <br />

          <div className = 'form-group' >
            <label htmlFor = "image" > Image </label>
            <input type = 'file' name = 'image' readOnly className = 'form-control' value = { this.state.image } />
          </div >
          <br />

          <br />

          <div className = 'form-group' >
            <Link to = { `/edititem/${this.state.id}` } className = "btn btn-outline-info btn-lg btn-block" >Edit Item </Link>
            <div className = "row" >
              <div className = "col-md-12 m-auto" >
                <button type = "button" className = "btn btn-outline-danger btn-lg btn-block" onClick = { this.onDeleteClick.bind(this, this.state.item.id) } > Delete Item </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    return (
      <div className = "ShowItemDetails" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-10 m-auto" >
              <br />
              <br />
              <Link to = "/" className = "btn btn-outline-warning float-left" > Show Item List </Link>
            </div >
            <br />
            <div className = "col-md-8 m-auto" >
              <h1 className = "display-4 text-center" > Item&apos;s Record</h1>
              <p className = "lead text-center" > View Item&apos;s Info </p >
              <hr />
            </div>
          </div >
        <div >
        { Item }
      </div>
      </div>
      </div>
    )
  }
}

ShowUserDetails.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default ShowUserDetails
