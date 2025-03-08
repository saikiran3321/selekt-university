import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CounterUp from '../../elements/Counter'

export default class AboutUs extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <section className="about-area-two">
            <Container>
              <Row className="justify-content-center">
                <Col lg={6} xl={5}>
                  <div className="about__title-wrap">
                    <div className="section__title">
                      <span className="sub-title">Who we are</span>
                      <h2 className="title tg-svg">The Leading Global <span className="position-relative">
                        <img
                          alt="title_shape" className="svg-icon" id="about-svg"
                          src="/assets/images/icons/title_shape.svg" />
                        Marketplace</span>for Learning and Instruction</h2>
                    </div>
                    <p>In today’s AI-driven world, traditional academic learning
                      alone isn’t enough to meet the needs of top IT companies.
                      The industry demands hands-on experience with the latest technologies and tools.</p>
                    <p>We provide a practical learning platform where graduates can gain real-world experience
                      with industry-standard technologies and workflows. Our goal is to bridge the gap between
                      theory and practice, making students job-ready.</p>
                    <p>Founded by an IT expert with 20+ years of experience in Fortune 500 companies, our courses
                      are designed to equip students with the right skills. With a strong cloud-based learning
                      environment, we ensure they are prepared for real-world IT challenges.</p>
                    <div className="tg-button-wrap">
                      <a className="btm tg-svg" href="/courses">
                        <span className="text">Explore Courses
                          <img
                            alt="btn-arrow" className="svg-icon m-1" id="about-btn"
                            src="/assets/images/icons/btn-arrow.svg" />
                        </span>
                      </a>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={11} xl={7}>
                  <div className="about__images-wrap">
                    <div className="column">
                      <img alt="img" src="/assets/images/others/about_img03.jpg" />
                    </div>
                    <div className="column">
                      <img alt="img" src="/assets/images/others/about_img04.jpg" />
                      <img alt="img" src="/assets/images/others/about_img05.jpg" />
                    </div>
                    <div className="about__shapes">
                      <img alt="img" className="about-shape-01" src="/assets/images/objects/about_shape01.png" />
                      <img alt="img" className="about-shape-02" src="/assets/images/objects/about_shape02.png" />
                      <img
                        alt="img" className="about-shape-03 rotateme"
                        src="/assets/images/objects/about_shape03.png" />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="fact-area fact-bg" style={{ backgroundImage: 'url(\'/assets/images/bg/fact_bg.jpg\')' }}>
            <Container>
              <Row className="justify-content-center">
                <Col lg={7} md={9} xl={5}>
                  <div className="section__title text-center mb-50">
                    <span className="sub-title">Worldwide Our Achievement</span>
                    <h2 className="title tg-svg">Grow You <span className="position-relative">
                      <img
                        alt="title_shape" className="svg-icon" id="about-svg"
                        src="/assets/images/icons/title_shape.svg" />Skills</span>
                      To Advance Your Career path</h2>
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col lg={3} md={4} sm={6}>
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-webinar" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count"><CounterUp duration={10} end={325200} /></h3>
                      <p>Students Enrolled</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-graduates" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count"><CounterUp duration={10} end={11399} /></h3>
                      <p>Top Class Courses</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-countries" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count"><CounterUp duration={10} end={312} /></h3>
                      <p>World Countries</p>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={4} sm={6}>
                  <div className="fact__item-two text-center">
                    <div className="fact__icon-two">
                      <i className="flaticon-trophy" />
                    </div>
                    <div className="fact__content-two">
                      <h3 className="count"><CounterUp duration={10} end={590} /></h3>
                      <p>Award We Received</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* Need to add another section */}
          <section
            className="cta-area-two position-relative"
            style={{ backgroundImage: 'url(\'/assets/images/bg/cta_bg.jpg\')' }}>
            <Container>
              <Row className="justify-content-center">
                <Col lg={10} xl={8}>
                  <div className="cta__content">
                    <p>ARE YOU READY FOR THIS OFFER</p>
                    <h2 className="title">50% Offer For Very First 50</h2>
                    <h5 className="sub-title">Student’s Mentors</h5>
                    <div className="tg-button-wrap justify-content-center">
                      <a className="btm tg-svg" href="/contact">
                        <span className="text">Become a Student
                          <img
                            alt="btn-arrow" className="svg-icon m-1" id="about-btn"
                            src="/assets/images/icons/btn-arrow.svg" />
                        </span>
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="cta__shapes">
              <img alt="img" className="position-absolute" src="/assets/images/objects/cta_shape001.svg" />
              <img alt="img" className="position-absolute" src="/assets/images/objects/cta_shape002.png" />
              <img alt="img" className="position-absolute" src="/assets/images/objects/cta_shape003.svg" />
            </div>
          </section>
          <section className="events-area position-relative section-pt-120 section-pb-90">
            <Container>
              <div className="section__title-wrap mb-55">
                <Row className="align-items-center gap-4 gap-md-0">
                  <Col md={8}>
                    <div className="section__title text-md-start">
                      <span className="sub-title">Featured Events</span>
                      <h2 className="title tg-svg">Upcoming <span className="position-relative">
                        <img
                          alt="title_shape" className="svg-icon" id="about-svg"
                          src="/assets/images/icons/title_shape.svg" />
                        Events</span></h2>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="tg-button-wrap justify-content-center justify-content-md-end">
                      <a className="btm tg-svg" href="/events">
                        <span className="text">Our All Events
                          <img
                            alt="btn-arrow" className="svg-icon m-1" id="about-btn"
                            src="/assets/images/icons/btn-arrow.svg" />
                        </span>
                      </a>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row className="justify-content-center">
                <Col lg={4} md={6} sm={10}>
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <a className="shine__animate-link" href="/events-details">
                        <img alt="img" src="/assets/images/events/event_thumb01.jpg" />
                      </a>
                      <span className="events__date"><i className="flaticon-calendar-date" /> 25 May, 2023</span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title"><a href="/events-details">
                        Aewe Creating Futures Through Technology Conference</a></h4>
                      <span className="location"><i className="flaticon-pin-1" /> United Kingdom</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={10}>
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <a className="shine__animate-link" href="/events-details">
                        <img alt="img" src="/assets/images/events/event_thumb02.jpg" />
                      </a>
                      <span className="events__date"><i className="flaticon-calendar-date" /> 25 May, 2023</span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title"><a href="/events-details">
                        Exactly How Technology Can Make Reading Better</a></h4>
                      <span className="location"><i className="flaticon-pin-1" /> Tokyo Japan</span>
                    </div>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={10}>
                  <div className="events__item shine__animate-item">
                    <div className="events__item-thumb">
                      <a className="shine__animate-link" href="/events-details">
                        <img alt="img" src="/assets/images/events/event_thumb03.jpg" />
                      </a>
                      <span className="events__date"><i className="flaticon-calendar-date" /> 25 May, 2023</span>
                    </div>
                    <div className="events__item-content">
                      <h4 className="title"><a href="/events-details">
                        Aewe Creating Futures Through Technology Conference</a></h4>
                      <span className="location"><i className="flaticon-pin-1" /> New Work</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <div className="mentors__shapes">
              <img alt="shape" src="/assets/images/objects/mentors_shape01.png" />
              <img alt="shape" src="/assets/images/objects/events_shape.png" width={98} />
            </div>
          </section>
        </div>
      </Fragment>
    )
  }
}
