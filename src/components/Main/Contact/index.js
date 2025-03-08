import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Contact extends Component {
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
                          <i className="flaticon-whatsapp" />
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
                    <form action="" id="contact-form" method="POST">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" name="name" placeholder="Name *" required type="text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" name="email" placeholder="E-mail *" required type="email" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" name="phone" placeholder="Phone *" required type="number" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              className="form-control" name="subject"
                              placeholder="Your Subject *" required type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Message" required />
                      </div>
                      <button className="btm" type="submit">Send Message</button>
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
