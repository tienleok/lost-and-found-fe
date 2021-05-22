import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'
import Category from './Configuration.json'

const errors = []
class CreateLostItem extends Component {
  constructor () {
    super()
    this.state = {}
    this.state.status = 'REPORTED'
    this.state.timestamp = new Date()
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
        errors[e.target.name] = ''
      } else {
        errors[e.target.name] = 'Required input'
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
    const d = new Date(date)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
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

  getBase64 (image) {
    return new Promise(resolve => {
      let imageInfo
      let baseURL = ''
      // Make new FileReader
      const reader = new FileReader()

      // Convert the file to base64 text
      reader.readAsDataURL(image)

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log('Called', reader)
        baseURL = reader.result
        console.log(baseURL)
        resolve(baseURL)
      }
      console.log(imageInfo)
    })
  };

  handleFileInputChange (e) {
    console.log(e.target.images[0])
    let { image } = this.state

    image = e.target.images[0]

    this.getBase64(image)
      .then(result => {
        image.base64 = result
        console.log('File Is', image)
        this.setState({
          base64URL: result,
          image
        })
      })
      .catch(err => {
        console.log(err)
      })

    this.setState({
      image: e.target.images[0]
    })
  };

  onSubmit (e) {
    e.preventDefault()
    // console.log(this.state)
    // this.setState({
    // timestamp: this.formatDate(this.state.timestamp)
    // })
    // console.log(this.state.timestamp)
    if (errors.title.length === 0 && errors.category.length === 0 && errors.description.length === 0 && errors.timestamp.length === 0) {
      axios
        .post('/api/create-lost-item', { lostItemInput: this.state })
        .then(res => {
          this.setState({})
          this.props.history.push('/showlostitemlist')
        })
        .catch(err => {
          console.log('Error in CreateLostItem: ' + err.stack)
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
              <Link to = "/showlostitemlist" className = "btn btn-warning float-left" >Show Lost Item List </Link>
            </div >

            <div className = "col-md-8 m-auto" >
              <h1 className = "display-4 text-center" >Add Lost Item </h1>
              <p className = "lead text-center" >Create new lost item </p>

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

CreateLostItem.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default CreateLostItem
