import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Banner extends Component {
  render() {
    return (
      <section
        className="banner-area banner-bg"
        style={{ backgroundImage: 'url("/assets/images/banner/banner_bg.jpg")' }}>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="banner__content">
                <img alt="shape" className="shape alltuchtopdown" src="/assets/images/banner/bshape_01.png" />
                <img alt="shape" className="shape" src="/assets/images/banner/bshape_02.png" />
                <span className="sub-title">100% Satisfaction Guarantee</span>
                <h3 className="title tg-svg">Learn
                  <span className="position-relative">
                    <span className="svg-icon" data-svg-icon="/assets/images/icons/title_shape.svg" id="svg-2" />
                    Skills</span> From Our Top Instructors
                </h3>
                <p>No pre-recorded videos—learn live in a hybrid mode,
                  either in the classroom or from home. You will practice hands-on projects in our cloud servers,
                  just like a software engineer in a company.</p>
                <div className="banner__btn-wrap">
                  <div className="tg-button-wrap">
                    <a className="btm tg-svg" href="/course"><span className="text">Explore Courses</span>
                      <span className="svg-icon" data-svg-icon="/assets/images/icons/btn-arrow.svg" id="svg-1" />
                    </a>
                  </div>
                  <div className="banner__phone">
                    <i className="flaticon-phone-call" />
                    <div className="number-info">
                      <span>Have any Question?</span>
                      <h6 className="number"><a href="tel:9121 900 900">9121 900 900</a></h6>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="banner__images">
                <img alt="img" className="main-img" src="/assets/images/banner/banner_img.png" />
                <img alt="shape" className="shape" src="/assets/images/banner/bshape_03.png" />
                <img alt="shape" className="shape" src="/assets/images/banner/bshape_04.png" />
                <img alt="shape" className="shape" src="/assets/images/banner/bshape_05.png" />
                <div className="banner__fact">
                  <div className="banner__fact-item">
                    <div className="icon">
                      <i className="flaticon-group" />
                    </div>
                    <div className="info">
                      <span>Total Students</span>
                      <h4 className="count">15K</h4>
                    </div>
                  </div>
                  <div className="banner__fact-item">
                    <div className="icon">
                      <i className="flaticon-graduation-cap" />
                    </div>
                    <div className="info">
                      <span>Complete Graduation</span>
                      <h4 className="count">34K</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
