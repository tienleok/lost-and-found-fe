import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'

class UpdateUserInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      description: '',
      status: '',
      timestamp: '',
      location: '',
      image: '',
      keyword: '',
      comments: '',
      votes: ''

    }
  }

  componentDidMount () {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/lost-item/' + this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, item: res.data})
        this.setState({
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
        console.log('Error from UpdateItemInfo: ' + err.stack)
      })
  };

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  onSubmit (e) {
    e.preventDefault()

    const data = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      status: this.state.status,
      timestamp: this.state.timestamp
      //    location: this.data.location,
      //   image: this.data.image,
      // keyword: this.data.keyword,
      // comments: this.data.comments,
      // votes: this.data.votes

    }

    axios
      .post('/api/update-user/' + this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/showlostitem/' + this.props.match.params.id)
      })
      .catch(err => {
        console.log('Error in UpdateUserInfo: ' + err.stack)
      })
  };

  render () {
    return (
      <div className = "UpdateItemInfo" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-8 m-auto" >
              <br />
              <Link to = "/" className = "btn btn-outline-warning float-left" > Show Item List </Link>
            </div >
            <div className = "col-md-8 m-auto" >
              <h1 className = "display-4 text-center" > Edit Item </h1>
              <p className = "lead text-center" > Update Item&apos;s Info </p >
            </div>
          </div >

          <div className = "col-md-8 m-auto" >
            <form noValidate onSubmit = { this.onSubmit } >
              <div className = 'form-group' >
                <label htmlFor = "title" > Title </label>
                <input type = 'text' placeholder = 'Title' name = 'title' className = 'form-control' value = { this.state.title } onChange = { this.onChange } />
              </div >
              <br />

              <div className = 'form-group' >
                <label htmlFor = "category" > Category </label>
                <input type = 'text' placeholder = 'Category' name = 'category' className = 'form-control' value = { this.state.category } onChange = { this.onChange } />
              </div >
              <br />

              <div className = 'form-group' >
                <label htmlFor = "description" > Description </label>
                <input type = 'text' placeholder = 'Description' name = 'description' className = 'form-control' value = { this.state.description } onChange = { this.onChange } />
              </div >

              <div className = 'form-group' >
                <label htmlFor = "status" > Status </label>
                <input type = 'text' placeholder = 'Status' name = 'status' className = 'form-control' value = { this.state.status } onChange = { this.onChange } />
              </div >

              <div className = 'form-group' >
                <label htmlFor = "timestamp" > Date </label>
                <input type = 'date' placeholder = 'date' name = 'timestamp' className = 'form-control' value = { this.state.timestamp } onChange = { this.onChange } />
              </div >

              <div className = 'form-group' >
                <label htmlFor = "location" > Location </label>
                <input type = 'text' placeholder = 'Location' name = 'location' className = 'form-control' value = { this.state.location } onChange = { this.onChange } />
              </div >
              <br />

              <div className = 'form-group' >
                <label htmlFor = "image" > Image </label>
                <input type = 'file' name = 'image' className = 'form-control' value = { this.state.image } onChange = { this.onChange } />
              </div >
              <br />

              <button type = "submit" className = "btn btn-outline-info btn-lg btn-block" > Update Item </button>
            </form >
          </div>
        </div>
      </div >
    )
  }
}

UpdateUserInfo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default UpdateUserInfo
