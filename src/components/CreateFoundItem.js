import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import Category from './Configuration.json'

let mfile = ''
const errors = []
// 'data:image/png;base64,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'
class CreateFoundItem extends Component {
  constructor () {
    super()
    this.state = {}
    this.state.status = 'REPORTED'
    this.state.timestamp = new Date()
    // '2021-05-11'
    // 2T17:30:15+05:30'
    this.requiredFields = ['title', 'category', 'description']
    errors.category = 'Required input'
    errors.title = 'Required input'
    errors.description = 'Required input'
    errors.timestamp = ''
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    if (this.requiredFields.includes(e.target.name)) {
      if (e.target.value.length > 0) {
        errors.[e.target.name] = ''
      } else {
        errors.[e.target.name] = 'Required input'
      }
    }
    if (e.target.name === 'timestampa') {
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
    var d = new Date(date)
    var day, month, year
    month = '' + (d.getMonth() + 1)
    day = '' + d.getDate()
    year = d.getFullYear()

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

  handleFileRead = async (e) => {
    this.setState({
      image: e.target.files[0]
    })

    const file = e.target.files[0]
    if (file !== null && file !== '') {
      const base64 = await this.convertBase64(file)
      mfile = base64
      console.log(mfile)
    }
  };

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = (e) => {
        this.setState({ mimage: e.target.result })
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  };

  onSubmit (e) {
    e.preventDefault()
    // this.setState({
    // timestamp: '2021-05-11'
    // this.formatDate(this.state.timestamp)
    // })
    console.log(this.state)
    if (errors.title.length === 0 && errors.category.length === 0 && errors.description.length === 0 && errors.timestamp.length === 0) {
      axios
        .post('/api/create-found-item', { foundItemInput: this.state })
        .then(res => {
          this.setState({})
          this.props.history.push('/showfounditemlist')
        })
        .catch(err => {
          console.log('Error in CreateItem: ' + err.stack)
        })
    }
  };

  render () {
    return (
      <div className = "CreateItem" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-8 m-auto" >
              <br />
              <Link to = "/showfounditemlist" className = "btn btn-warning float-left" >Show Found Item List </Link>
            </div >

            <div className = "col-md-8 m-auto" >
              <h1 className = "display-4 text-center" >Add Found Item </h1>
              <p className = "lead text-center" >Create new found item </p>

              <form noValidate onSubmit = { this.onSubmit } >
                <div className = 'form-group' >
                  <label>Title</label>
                  <input type = 'text' placeholder = 'Title' name = 'title' className = 'form-control' value = { this.state.title } onChange = { this.onChange } />
                  {errors.title &&
                  <span style={{ color: 'red' }}>{errors.title}</span>}
                </div >
                <br />

                <div className = 'form-group' >
                <label>Category</label>
                <select name = 'category' className = 'form-control' value = { this.state.category } onChange = { this.onChange }>
                 {Category.ItemCategory.map(optn => (
                     <option key={optn.Category}>{optn.Category}</option>
                 ))}
                </select>
                {errors.category &&
                  <span style={{ color: 'red' }}>{errors.category}</span>}
                </div >
                <br />

                <div className = 'form-group' >
                <label>Location</label>
                 <input type = 'text' placeholder = 'Location' name = 'description' className = 'form-control' value = { this.state.description } onChange = { this.onChange } />
                  {errors.description &&
                  <span style={{ color: 'red' }}>{errors.description}</span>}
                </div >
                <br />
                <div className = 'form-group' >
                <label>Date</label>
                 <input type = 'date' placeholder = 'date' name = 'timestampa' className = 'form-control' value = { this.state.timestampa } onChange = { this.onChange } />
                  {errors.timestamp &&
                  <span style={{ color: 'red' }}>{errors.timestamp}</span>}
                </div >
                <br />
                {/* <div className = 'form-group' >
                <label>Location</label>
                 <input type = 'text' placeholder = 'Location' name = 'location' className = 'form-control' value = { this.state.location } onChange = { this.onChange } />
                </div >
                <br />
                <div className = 'form-group' >
                  <input type = 'file' name = 'image' className = 'form-control' onChange={e => this.handleFileRead(e)} />
                </div >
                <br /> */}
                <input type = "submit" className = "btn btn-outline-warning btn-block mt-4" />
              </form>
            </div >
          </div>
        </div >
      </div>
    )
  }
}

CreateFoundItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default CreateFoundItem
