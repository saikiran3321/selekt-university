import React, { Component, createRef } from 'react'
import Slider from 'react-slick'
import { Row, Col } from 'react-bootstrap'
import review from '../../../util/review.json'

// Custom PrevArrow
const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} aria-label="PrevArrow" className="slick-prev" type="button">
    <i className="flaticon-chevron" />
  </button>
)

// Custom NextArrow
// eslint-disable-next-line react/no-multi-comp
const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} aria-label="NextArrow" className="slick-next" type="button">
    <i className="flaticon-chevron" />
  </button>
)

// eslint-disable-next-line react/no-multi-comp
export default class TestimonialSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
    }
    this.slider1Ref = createRef()
    this.slider2Ref = createRef()
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1Ref.current,
    })
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      beforeChange: (current, next) => {
        document.querySelectorAll('.slick-slide').forEach(slide => {
          slide.setAttribute('tabindex', '-1')
        })
      },
      afterChange: current => {
        document.querySelectorAll('.slick-slide')[current].removeAttribute('tabindex')
      },
    }
    return (
      <Row className="align-items-xl-center">
        <Col lg={5} md={7} sm={9}>
          <div className="testimonial__image-wrapper position-relative">
            <Slider
              {...settings} ref={this.slider1Ref} asNavFor={this.state.nav1}
              className="testimonial__image-active">
              {review.map((item) => (
                <div key={item.id} className="testimonial__image-item">
                  <img alt="testimonial" src={`/assets/images/others/${item.image}`} />
                </div>
              ))}
            </Slider>
            <div className="testimonial__shapes">
              <img
                alt="shape" data-aos="fade-up-left" data-aos-delay={300}
                src="/assets/images/objects/testi_shape01.svg" />
              <img
                alt="shape" data-aos="fade-up-right" data-aos-delay={300}
                src="/assets/images/objects/testi_shape02.svg" />
              <img
                alt="shape" className="rotateme"
                src="/assets/images/objects/testi_shape03.svg" />
            </div>
          </div>
        </Col>
        <Col lg={7}>
          <div className="testimonial__content-wrapper">
            <div className="section__title white-title mb-40">
              <h2 className="title tg-svg">
                What Our <span className="position-relative">
                  <img
                    alt="title_shape" className="svg-icon"
                    id="svg-7" src="/assets/images/icons/title_shape.svg" />Students</span>
                <br />
                Say About Us
              </h2>
            </div>
            <Slider
              {...settings}
              // arrows={true}
              ref={this.slider1Ref} asNavFor={this.state.nav1}
              className="testimonial__content-active testimonial__content-nav">
              {review.map((item) => (
                <div key={item.id} className="testimonial__content-item">
                  <div className="testimonial__content-icon">
                    <img alt="quote" src="/assets/images/icons/quote.png" />
                  </div>
                  <p>{item.text}</p>
                  <div className="testimonial__content-avatar">
                    <h5 className="name">{item.name}</h5>
                    <span className="designation">{item.designation}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Col>
      </Row>
    )
  }
}
