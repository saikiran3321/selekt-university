import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false,
    }
  }

  toggleContent = () => {
    this.setState((prevState) => ({
      showMore: !prevState.showMore,
    }))
  };

  render() {
    return (
      <section className="about-area tg-motion-effects section-py-120">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} xl={6}>
              <div className="about__images">
                <img alt="img" className="small-img tg-motion-effects3" src="/assets/images/others/about_img02.png" />
                <img alt="img" className="big-img" src="/assets/images/others/about_img01.png" />
                <div className="about__exp">
                  <h4 className="year">12 +</h4>
                  <p>Years of Experiences</p>
                </div>
                <img alt="svg" className="dots tg-motion-effects2" src="/assets/images/others/about_dots.svg" />
              </div>
            </Col>
            <Col lg={7} xl={6}>
              <div className="about__content">
                <div className="section__title">
                  <span className="sub-title">Get To Know About Us</span>
                  <h2 className="title tg-svg">Discover top
                    <span className="position-relative">
                      <span className="svg-icon" data-svg-icon="/assets/images/icons/title_shape.svg" id="svg-3" />
                      Instructors
                    </span>
                    Around the World
                  </h2>
                </div>
                <p className="desc">
                  Mastering programming alone isn’t enough to thrive in the IT industry.
                  To excel, professionals must also understand organizational processes, task management,
                  communication, design patterns, and a vast array of deployment and process management tools.
                  <span
                    onClick={this.toggleContent}
                    style={{ color: 'blue', cursor: 'pointer' }}
                  >
                    {this.state.showMore ? ' Show less' : ' Show more'}
                  </span>
                </p>

                {this.state.showMore && (
                  <p className="desc" id="show_content">
                    Our founder, a seasoned IT expert with global experience across the USA, UK, Europe,
                    Singapore, Malaysia, and a strong foundation in Bengaluru. With first-hand experience transitioning
                    from a programmer to an architect of large-scale solutions, he will mentor you on becoming a
                    high-performing professional. Through real-world insights, proven methodologies, and cutting-edge
                    tools, you’ll gain the skills needed to stand out in the competitive IT landscape.
                  </p>
                )}

                <ul className="about__info-list list-wrap">
                  <li className="about__info-list-item">
                    <div className="icon"><i className="flaticon-support" /></div>
                    <p className="content">2000+ <br /> Expert Tutors</p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon"><i className="flaticon-file" /></div>
                    <p className="content">1500+ <br /> Top Lessons</p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon"><i className="flaticon-graduation-cap" /></div>
                    <p className="content">18000+ <br /> Over Students</p>
                  </li>
                  <li className="about__info-list-item">
                    <div className="icon"><i className="flaticon-video-player" /></div>
                    <p className="content">3200+ <br /> Pro Videos</p>
                  </li>
                </ul>
                <div className="tg-button-wrap">
                  <a className="btm tg-svg" href="/about-us">
                    <span className="text">Discover More</span>
                    <span className="svg-icon" data-svg-icon="/assets/images/icons/btn-arrow.svg" id="about-btn" />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
