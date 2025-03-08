import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const categories = [
  { name: 'Graphic Design', courses: 19, icon: 'flaticon-graphic-design' },
  { name: 'Marketing', courses: 10, icon: 'flaticon-email-marketing' },
  { name: 'Finance', courses: 8, icon: 'flaticon-bars' },
  { name: 'Development', courses: 13, icon: 'flaticon-programming-language' },
  { name: 'Science', courses: 19, icon: 'flaticon-atom' },
]

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
                      <img
                        alt="title_shape" className="svg-icon" id="svg-5"
                        src="/assets/images/icons/title_shape.svg" />
                      Categories
                    </span>
                  </h2>
                </div>
                <p>Borem ipsum dolor sit amet, consectetur adipiscing eliawe awut elit ellus,
                  luctus nec ullamcorper mattisBorem ipsum dolor awes atnse awctetur.</p>
                <div className="tg-button-wrap justify-content-center justify-content-xl-start">
                  <a className="btm tg-svg" href="/course">
                    <span className="text">All Categories</span>
                    <img alt="btn-arrow" className="svg-icon" id="svg-6" src="/assets/images/icons/btn-arrow.svg" />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={9} xl={7}>
              <div className="categories__wrap">
                <img alt="shape" src="/assets/images/objects/categories_shape03.svg" />
                <img alt="shape" src="/assets/images/objects/categories_shape04.svg" />
                <Row className="justify-content-center row-cols-2 row-cols-md-3">
                  {categories.map((category) => (
                    <Col key={category.name}>
                      <div className="categories__item">
                        <a href="/course">
                          <i className={category.icon} />
                          <span className="name">{category.name}</span>
                          <span className="courses">{category.courses} Courses</span>
                        </a>
                      </div>
                    </Col>
                  ))}
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
