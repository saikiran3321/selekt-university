import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BlogPost from '../../../elements/BlogSlider'

export default class Blog1 extends Component {
  render() {
    return (
      <Fragment>
        <section className="blog-area blog-bg-circle section-pt-205 section-pb-90">
          <Container>
            <Row className="justify-content-center">
              <Col lg={7} md={8} xl={6}>
                <div className="section__title text-center mb-40">
                  <span className="sub-title">Always Smart To Hear News</span>
                  <h2 className="title tg-svg">
                    Latest <span className="position-relative">
                      <span className="svg-icon" data-svg-icon="/assets/images/icons/title_shape.svg" id="svg-10" />
                      News Blog
                    </span>
                  </h2>
                  <p className="desc">Receive huge benefits with our lifetime Plumbing Receive huge
                    benefits with our lifetime Plumbing email address will be shown</p>
                </div>
              </Col>
            </Row>
            <BlogPost />
          </Container>
          <img
            alt="Object" className="object"
            src="/assets/images/objects/blog_shape01.png" style={{ left: '8%', top: '32%' }} width={97} />
          <img
            alt="Object" className="object rotateme"
            src="/assets/images/objects/blog_shape02.png" style={{ right: '9%', bottom: '23%' }} width={66} />
        </section>
      </Fragment>
    )
  }
}
