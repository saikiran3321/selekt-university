import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Instructor1() {
  return (
    <Fragment>
      <section className="instructor-area section-pt-120 section-pb-70">
        <Container>
          <div className="section__title-wrap">
            <Row className="align-items-center gap-4 gap-md-0">
              <Col md={8}>
                <div className="section__title text-md-start">
                  <span className="sub-title">Our Qualified People Matter</span>
                  <h2 className="title tg-svg">Top <span className="position-relative">
                    <span
                      className="svg-icon"
                      data-svg-icon="/assets/images/icons/title_shape.svg"
                      id="svg-8" />Class</span>
                    instructor</h2>
                </div>
              </Col>
              <Col md={4}>
                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                  <Link className="btm tg-svg" to="/"><span className="text">All Instructors</span>
                    <span
                      className="svg-icon"
                      data-svg-icon="/assets/images/icons/btn-arrow.svg"
                      id="instructor-btn" />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} sm={6} xl={3}>
              <div className="instructor__item">
                <div className="instructor__img">
                  <div
                    className="instructor__shape"
                    style={{ backgroundColor: '#E2FAFF', borderRadius: '135px 0 0 0' }} />
                  <Link to="/">
                    <img alt="instructor" src="/assets/images/instructor/instructor01.png" />
                  </Link>
                </div>
                <div className="instructor__content">
                  <div className="left">
                    <span className="designation">Graphic Design</span>
                    <h4 className="name"><Link to="/">Robert Smith</Link></h4>
                  </div>
                  <div className="right">
                    <span className="share"><i className="flaticon-share" /></span>
                    <ul className="social-list list-wrap">
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
                      <li><Link to="/"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xl={3}>
              <div className="instructor__item">
                <div className="instructor__img">
                  <div
                    className="instructor__shape"
                    style={{ backgroundColor: '#E4FFE2', borderRadius: '135px 115px 115px 0' }} />
                  <Link to="/">
                    <img alt="instructor" src="/assets/images/instructor/instructor02.png" />
                  </Link>
                </div>
                <div className="instructor__content">
                  <div className="left">
                    <span className="designation">Web Design</span>
                    <h4 className="name"><Link to="/">Olivia Mia</Link></h4>
                  </div>
                  <div className="right">
                    <span className="share"><i className="flaticon-share" /></span>
                    <ul className="social-list list-wrap">
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
                      <li><Link to="/"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xl={3}>
              <div className="instructor__item">
                <div className="instructor__img">
                  <div
                    className="instructor__shape"
                    style={{ backgroundColor: '#E8EDFF', borderRadius: '135px 0 0 0' }} />
                  <Link to="/">
                    <img alt="instructor" src="/assets/images/instructor/instructor03.png" />
                  </Link>
                </div>
                <div className="instructor__content">
                  <div className="left">
                    <span className="designation">Digital Marketing</span>
                    <h4 className="name"><Link to="/">William Hope</Link></h4>
                  </div>
                  <div className="right">
                    <span className="share"><i className="flaticon-share" /></span>
                    <ul className="social-list list-wrap">
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
                      <li><Link to="/"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} sm={6} xl={3}>
              <div className="instructor__item">
                <div className="instructor__img">
                  <div
                    className="instructor__shape"
                    style={{ backgroundColor: '#FFE2E2', borderRadius: '135px 115px 115px 0' }} />
                  <Link to="/">
                    <img alt="instructor" src="/assets/images/instructor/instructor04.png" /></Link>
                </div>
                <div className="instructor__content">
                  <div className="left">
                    <span className="designation">Web Development</span>
                    <h4 className="name"><Link to="/">Sophia Ava</Link></h4>
                  </div>
                  <div className="right">
                    <span className="share"><i className="flaticon-share" /></span>
                    <ul className="social-list list-wrap">
                      <li><Link to="/"><i className="fab fa-facebook-f" /></Link></li>
                      <li><Link to="/"><i className="fab fa-twitter" /></Link></li>
                      <li><Link to="/"><i className="fab fa-linkedin-in" /></Link></li>
                      <li><Link to="/"><i className="fab fa-youtube" /></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}
