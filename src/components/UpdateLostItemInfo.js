import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../App.css'
import moment from 'moment'

import Category from './Configuration.json'
import Status from './ConfigurationStatus.json'
let timestampa
class UpdateLostItemInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('/api/lost-item/' + this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, item: res.data})
        timestampa = moment(res.data.timestamp).format('YYYY-MM-DD')
        this.setState({
          title: res.data.title,
          description: res.data.description,
          status: res.data.status,
          category: res.data.category,
          timestamp: res.data.timestamp
        })
      })
      .catch(err => {
        console.log('Error from UpdateItemInfo: ' + err.stack)
      })
  };

  onChange (e) {
    if (e.target.name === 'timestampa') {
      timestampa = moment(e.target.value).format('YYYY-MM-DD')
      this.setState({
        timestamp: this.formatDate(e.target.value)
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  };

  formatDate (date) {
    const d = new Date(date)
    let day, month
    month = '' + (d.getMonth() + 1)
    day = '' + d.getDate()
    const year = d.getFullYear()

    if (month.length < 2) {
      month = '0' + month
    }
    if (day.length < 2) {
      day = '0' + day
    }
    // console.log([year, month, day].join('-').toString())
    // '2021-05-11'
    // 2T17:30:15+05:30'

    console.log(year + '-' + month + '-' + day + 'T00:00:00-00:00')
    // return [year, month, day].join('-').toString()
    return year + '-' + month + '-' + day + 'T00:00:00-00:00'
  }

  onSubmit (e) {
    e.preventDefault()

    // const data = {
    //   title: this.state.title,
    //   category: this.state.category,
    //   description: this.state.description,
    //   status: this.state.status,
    //   timestamp: this.state.timestamp,
    //   location: this.state.location,
    //   image: this.state.image
    //   // keyword: this.data.keyword,
    //   // comments: this.data.comments,
    //   // votes: this.data.votes

    // }
    console.log(this.props.match.params.id)
    console.log(this.state)
    axios
      .post('/api/update-lost-item/',
        {
          id: this.props.match.params.id,
          lostItemInput: this.state
        }
      )
      .then(res => {
        // this.props.history.push('/showlostitemlist')
      })
      .catch(err => {
        console.log('Error in UpdateLostItemInfo: ' + err.stack)
      })
    this.props.history.push('/showlostitemlist')
  };

  render () {
    return (
      <div className = "UpdateItemInfo" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-8 m-auto" >
              <br />
              <Link to = "/showlostitemlist" className = "btn btn-outline-warning float-left" > Show Lost Item List </Link>
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
                <select name = 'category' className = 'form-control' value = { this.state.category } onChange = { this.onChange }>
                 {Category.ItemCategory.map(optn => (
                     <option key={optn.Category}>{optn.Category}</option>
                 ))}
                </select>
              </div >
              <br />

              <div className = 'form-group' >
                <label htmlFor = "description" > Location </label>
                <input type = 'text' placeholder = 'Location' name = 'description' className = 'form-control' value = { this.state.description } onChange = { this.onChange } />
              </div >

              <div className = 'form-group' >
                <label htmlFor = "status" > Status </label>
                <select name = 'status' className = 'form-control' value = { this.state.status } onChange = { this.onChange }>
                 {Status.ItemStatus.map(optn => (
                     <option key={optn.Status}>{optn.Status}</option>
                 ))}
                </select>
                </div >

              <div className = 'form-group' >
                <label htmlFor = "timestamp" > Date </label>
                <input type = 'date' placeholder = 'date' name = 'timestampa' className = 'form-control' value = { timestampa } onChange = { this.onChange } />
              </div >

              {/* <div className = 'form-group' >
                <label htmlFor = "location" > Location </label>
                <input type = 'text' placeholder = 'Location' name = 'location' className = 'form-control' value = { this.state.location } onChange = { this.onChange } />
              </div >
              <br />

              <div className = 'form-group' >
                <label htmlFor = "image" > Image </label>
                <input type = 'file' name = 'image' className = 'form-control' value = { this.state.image } onChange = { this.onChange } />
              </div >
              <br /> */}

              <button type = "submit" className = "btn btn-outline-info btn-lg btn-block" > Update Item </button>
            </form >
          </div>
        </div>
      </div >
    )
  }
}

UpdateLostItemInfo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default UpdateLostItemInfo
