import React, { Fragment } from 'react'
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
                      <img
                        alt="title_shape" className="svg-icon"
                        id="svg-9"
                        src="/assets/images/icons/title_shape.svg" />Spread</span>
                    Experiences
                  </h2>
                </div>
                <div className="cta__desc">
                  <p>Borem ipsum dolor sit amet,
                    consectetur adipiscing eliawe awUt elit ellus, luctus nec ullamcorper mattisBorem</p>
                </div>
                <div className="tg-button-wrap justify-content-center justify-content-md-end">
                  <a className="btn white-btn tg-svg" to="/contact">
                    <span className="text">Become an Instructor</span>
                    <img alt="btn-arrow" className="svg-icon" id="cta-btn" src="/assets/images/icons/btn-arrow.svg" />
                  </a>
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
