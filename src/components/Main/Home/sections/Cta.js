import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Cta1() {
  return (
    <Fragment>
      <section className="cta-area">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="cta__wrapper">
                <div className="section__title white-title">
                  <h2 className="title tg-svg">
                    Join us <span className="position-relative">
                      <span
                        className="svg-icon"
                        data-svg-icon="assets/images/icons/title_shape.svg" id="svg-9" />Spread</span>
                    Experiences
                  </h2>
                </div>
                <div className="cta__desc">
                  <p>Borem ipsum dolor sit amet,
                    consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem</p>
                </div>
                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                  <Link className="btn white-btn tg-svg" to="/contact">
                    <span className="text">Become an Instructor</span>
                    <span className="svg-icon" data-svg-icon="assets/img/icons/btn-arrow.svg" id="cta-btn" />
                  </Link>
                </div>
                <img
                  alt="Object" className="object" data-aos="fade-down" data-aos-delay={400}
                  src="/assets/images/objects/cta_shape01.svg" style={{ left: 25, top: '-35px' }} />
                <img
                  alt="Object" className="object" data-aos="fade-up" data-aos-delay={400}
                  src="/assets/images/objects/cta_shape02.svg" style={{ right: '-20px', bottom: '-80px' }} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}
