import { Card } from 'react-bootstrap'
import React from 'react'
import '../App.css'
import img1 from '../images/nokia-laptop.jpg'

const Cards = (props) => {
  return (
    <div className='cards'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Title>title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the content.
          </Card.Text>
          <a href="#" className="btn btn-outline-success">Claim</a>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
