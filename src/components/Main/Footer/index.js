import React, { Fragment, Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer
          className="footer-bg"
          data-bg-color="var(--tg-common-color-dark)"
          style={{ backgroundColor: 'var(--tg-common-color-dark)' }}>
          <div className="footer__top-wrap">
            <Container>
              <Row>
                <Col lg={4} sm={6} xl={3}>
                  <div className="footer-widget">
                    <div className="footer__about">
                      <div className="footer__logo logo">
                        <a href="/"><img alt="img" src="/assets/images/logo/secondary_logo.png" /></a>
                      </div>
                      <p>We are reachable by a telephone call,
                        WhatsApp message or send us a mail. You can walk-in to our facility to know more.</p>
                      <ul className="list-wrap m-0 p-0">
                        <li className="address">High School Road, Ramavarapadu, Vijayawada.</li>
                        <li className="number">+91 9121 900 900</li>
                        <li className="socials">
                          <a aria-label="Facebook" href="/"><i className="fab fa-facebook-f" /></a>
                          <a aria-label="Twitter" href="/"><i className="fab fa-twitter" /></a>
                          <a aria-label="Instagram" href="/"><i className="fab fa-instagram" /></a>
                          <a aria-label="LinkedIn" href="/"><i className="fab fa-linkedin-in" /></a>
                          <a aria-label="YouTube" href="/"><i className="fab fa-youtube" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg={4} sm={6} xl={3}>
                  <div className="footer-widget widget_nav_menu">
                    <h4 className="fw-title">Resources</h4>
                    <ul className="list-wrap">
                      <li><a href="/about">About</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/contact">Help Center</a></li>
                      <li><a href="/">Refund</a></li>
                      <li><a href="/">Conditions</a></li>
                      <li><a href="/">Privacy Policy</a></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4} sm={6} xl={3}>
                  <div className="footer-widget widget_nav_menu">
                    <h4 className="fw-title">Courses</h4>
                    <ul className="list-wrap">
                      <li><a href="/course">Life Coach</a></li>
                      <li><a href="/course">Business Coach</a></li>
                      <li><a href="/course">Health Coach</a></li>
                      <li><a href="/course">Development</a></li>
                      <li><a href="/course">Web Design</a></li>
                      <li><a href="/course">SEO Optimize</a></li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4} sm={6} xl={3}>
                  <div className="footer-widget">
                    <h4 className="fw-title">Working Hours</h4>
                    <div className="footer__working-list">
                      <div className="footer__working-item">
                        <span className="day">Mon - Fri</span>
                        <span className="time">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="footer__working-item">
                        <span className="day">Mon - Fri</span>
                        <span className="time">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="footer__working-item">
                        <span className="day">Mon - Fri</span>
                        <span className="time">10:00 AM - 8:00 PM</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="copyright__wrapper">
            <Container>
              <Row>
                <Col lg={8}>
                  <div className="copyright__text">
                    <p>Copyright © {new Date().getFullYear()} Resumaker. All rights reserved.</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="copyright__menu">
                    <ul className="list-wrap d-flex flex-wrap justify-content-center justify-content-lg-end">
                      <li><a href="/">Privacy Policy</a></li>
                      <li><a href="/">Terms  Conditions</a></li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </Fragment>
    )
  }
}
