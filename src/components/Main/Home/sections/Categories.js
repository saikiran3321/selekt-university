import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Categories1() {
  return (
    <Fragment>
      <section className="categories-area section-py-130">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} md={10} xl={5}>
              <div className="categories__title-wrap text-xl-start">
                <div className="section__title">
                  <span className="sub-title">Unique online courses</span>
                  <h2 className="title tg-svg">
                    Browse By <span className="position-relative">
                      <span className="svg-icon" data-svg-icon="/assets/images/icons/title_shape.svg" id="svg-5" />
                      Categories
                    </span>
                  </h2>
                </div>
                <p>Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit ellus,
                  luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur.</p>
                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                  <Link className="btm tg-svg" to="/course">
                    <span className="text">All Categories</span>
                    <span className="svg-icon" data-svg-icon="/assets/images/icons/btn-arrow.svg" id="svg-6" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={9} xl={7}>
              <div className="categories__wrap">
                <img alt="shape" data-aos="fade-right" src="/assets/images/objects/categories_shape03.svg" />
                <img alt="shape" data-aos="fade-left" src="/assets/images/objects/categories_shape04.svg" />
                <Row className="justify-content-center row-cols-2 row-cols-md-3">
                  <Col>
                    <div className="categories__item">
                      <Link to="/course">
                        <i className="flaticon-graphic-design" />
                        <span className="name">Graphic Design</span>
                        <span className="courses">19 Courses</span>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="categories__item">
                      <Link to="/course">
                        <i className="flaticon-email-marketing" />
                        <span className="name">Marketing</span>
                        <span className="courses">10 Courses</span>
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center row-cols-2 row-cols-sm-3">
                  <Col>
                    <div className="categories__item">
                      <Link to="/course">
                        <i className="flaticon-bars" />
                        <span className="name">Fiance</span>
                        <span className="courses">08 Courses</span>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="categories__item">
                      <Link to="/course">
                        <i className="flaticon-programming-language" />
                        <span className="name">Development</span>
                        <span className="courses">13 Courses</span>
                      </Link>
                    </div>
                  </Col>
                  <Col>
                    <div className="categories__item">
                      <Link to="/course">
                        <i className="flaticon-atom" />
                        <span className="name">Science</span>
                        <span className="courses">19 Courses</span>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="categories__shapes">
          <div className="categories__shapes-item rotateme">
            <img alt="shape" src="/assets/images/objects/categories_shape01.png" />
          </div>
          <div className="categories__shapes-item" data-aos="fade-up">
            <img alt="shape" src="/assets/images/objects/categories_shape02.png" />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
