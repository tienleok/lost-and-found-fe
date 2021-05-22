import React, { Fragment } from 'react'

// const ContactPage = () => (
//   <Fragment >
//     <div className = "signup-form" >
//       <p > under construction </p>
//     </div >
//   </Fragment>
// )

// export default ContactPage

const ContactPage = () => (
  <Fragment >
      <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Contact Us</h2>
                                <p>Let us know what you think! We will try to get back to you as soon as we can. Thank you.</p><hr/>
                                <form id="contact-form">
                                <div className="form-group">
                                <div className="row">
                                <div className="col-md-6">
                                    <input placeholder = "Name" id="name" type="text" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder = "Email" id="email" type="email"
                                      className="form-control" />
                                </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder = "Subject" id="subject" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder = "Message" id="message"
                                       className="form-control" rows="4" cols="50"/>
                                </div>
                                <button type="submit" className="primary-btn submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </Fragment>
)

export default ContactPage
