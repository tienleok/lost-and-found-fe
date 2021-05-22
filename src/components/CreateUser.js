import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../App.css'
import axios from 'axios'

class CreateUser extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      category: '',
      description: '',
      status: '',
      timestamp: '',
      location: '',
      image: '',
      comments: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

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

    const data = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      status: this.state.status,
      timestamp: this.state.timestamp
    }

    axios
      .post('/api/create-found-item',
        { foundItemInput: { data } }
      )
      .then(res => {
        this.setState({
          title: '',
          category: '',
          description: '',
          status: '',
          timestamp: '',
          location: '',
          image: '',
          comments: ''
        })
        this.props.history.push('/')
      })
      .catch(err => {
        console.log('Error in CreateItem: ' + err.stack)
      })
  };

  render () {
    return (
      <div className = "CreateItem" >
        <div className = "container" >
          <div className = "row" >
            <div className = "col-md-8 m-auto" >
              <br />
              <Link to = "/" className = "btn btn-warning float-left" >Show Item List </Link>
            </div >

            <div className = "col-md-8 m-auto" >
              <h1 className = "display-4 text-center" >Add Item </h1>
              <p className = "lead text-center" >Create new item </p>

              <form noValidate onSubmit = { this.onSubmit } >
                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Title' name = 'title' className = 'form-control' value = { this.state.title } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Category' name = 'category' className = 'form-control' value = { this.state.category } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Description' name = 'description' className = 'form-control' value = { this.state.description } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Status' name = 'status' className = 'form-control' value = { this.state.status } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'date' placeholder = 'date' name = 'timestamp' className = 'form-control' value = { this.state.timestamp } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Location' name = 'location' className = 'form-control' value = { this.state.location } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'file' name = 'image' className = 'form-control' value = { this.state.image } onChange = { this.onChange } />
                </div >
                <br />

                <div className = 'form-group' >
                  <input type = 'text' placeholder = 'Comments' name = 'comments' className = 'form-control' value = { this.state.comments } onChange = { this.onChange } />
                </div >

                <input type = "submit" className = "btn btn-outline-warning btn-block mt-4" />
              </form>
            </div >
          </div>
        </div >
      </div>
    )
  }
}

CreateUser.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.any
}

export default CreateUser
