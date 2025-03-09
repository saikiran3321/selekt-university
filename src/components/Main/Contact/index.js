import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
      error: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  sendToWhatsApp = () => {
    const { name, email, mobile, subject, message } = this.state
    const phoneNumber = '9121900900'

    if (!name || !email || !mobile || !subject || !message) {
      this.setState({ error: 'All fields are required before sending.' })
      return
    }

    const text = `Hello, I am ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0ASubject: ${subject}%0AMessage: ${message}`
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`

    window.open(whatsappURL, '_blank')

    this.setState({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
      error: '',
    })
  };

  render() {
    return (
      <Fragment>
        <div>
          <section className="contact-area section-py-120">
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="contact-info-wrap">
                    <h2 className="title">Keep In Touch With Us</h2>
                    <p>We are reachable by a telephone call, WhatsApp message or send us a mail.
                      You can walk-in to our facility to know more.</p>
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin-1" />
                        </div>
                        <div className="content">
                          <p>High School Road, Ramavarapadu, Vijayawada. <br /> 521108 Andhra Pradesh</p>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="content">
                          <a href="tel:9121900900">+91 9121 900 900</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fab fa-whatsapp" />
                        </div>
                        <div className="content">
                          <a href="tel:9121900900">+91 9121 900 900</a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-email" />
                        </div>
                        <div className="content">
                          <a href="mailto:info@selektacademy.com">info@selektacademy.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="contact-form-wrap">
                    <h4 className="title">Get in Touch</h4>
                    {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                    <form action="" id="contact-form" method="POST">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control" name="name" onChange={this.handleChange}
                              placeholder="Name *" required type="text" value={this.state.name} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control" name="email" onChange={this.handleChange}
                              placeholder="E-mail *" required type="email" value={this.state.email} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control" maxLength={10} minLength={10}
                              name="mobile" onChange={this.handleChange} placeholder="Mobile *" required type="tel"
                              value={this.state.mobile} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control" name="subject"
                              onChange={this.handleChange} placeholder="Your Subject *" required
                              type="text" value={this.state.subject} />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control" name="message" onChange={this.handleChange}
                          placeholder="Message" required value={this.state.message} />
                      </div>
                      <button className="btm" onClick={this.sendToWhatsApp} type="submit">Send Message</button>
                    </form>
                    <p className="ajax-response mb-0" />
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* contact-area-end */}
          {/* contact-map */}
          <div className="contact-map">
            <iframe
              // eslint-disable-next-line max-len
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.6421174088064!2d80.683075!3d16.521596899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e4d0e7aec50f%3A0x89a2b4c00bff8f47!2sHigh%20School%20Rd%2C%20Vijayawada%2C%20Andhra%20Pradesh%20521108!5e1!3m2!1sen!2sin!4v1741431485638!5m2!1sen!2sin"
              style={{ border: 0 }} title="map" />
          </div>
        </div>
      </Fragment>
    )
  }
}
