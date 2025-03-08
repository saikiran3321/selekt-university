import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Breadcrumb extends Component {
  render() {
    const { breadcrumbTitle } = this.props

    return (
      <Fragment>
        <section className="header-bg">
          <div className="breadcrumb-area breadcrumb-bg" data-background="/assets/images/bg/breadcrumb_bg.jpg">
            <Container>
              <Row>
                <Col md={12}>
                  <div className="breadcrumb-content">
                    <h3 className="title">{breadcrumbTitle}</h3>
                    <nav className="breadcrumb">
                      <span>
                        <a href="/">Home</a>
                      </span>
                      <span className="breadcrumb-separator">
                        <i className="fas fa-angle-right" />
                      </span>
                      <span>{breadcrumbTitle}</span>
                    </nav>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </Fragment>
    )
  }
}
