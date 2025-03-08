import React, { Fragment } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'

export default function Newsletter1() {
  return (
    <Fragment>
      <section className="newsletter-area section-py-55">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={4} xl={6}>
              <div className="newsletter__img-wrap">
                <div className="newsletter__img" data-aos="fade-right">
                  <img alt="img" src="/assets/images/others/newsletter.png" />
                </div>
                <div className="newsletter__content">
                  <h4 className="title">Let’s Join To <br /> Our Newsletters</h4>
                </div>
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <div className="newsletter__form">
                <Form action="#">
                  <input placeholder="Enter your email" required type="email" />
                  <Button type="submit">Subscribe Now</Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
}
