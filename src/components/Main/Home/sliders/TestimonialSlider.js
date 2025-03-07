import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

// Custom PrevArrow
const PrevArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} aria-label="PrevArrow" className="slick-prev" type="button">
    <i className="flaticon-chevron" />
  </button>
)

// Custom NextArrow
const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <button {...props} aria-label="NextArrow" className="slick-next" type="button">
    <i className="flaticon-chevron" />
  </button>
)

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.testimonial__image-active',
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
}

export default function TestimonialSlider1() {
  const [nav1, setNav1] = useState(null)
  const [, setNav2] = useState(null)
  const slider1Ref = useRef(null)
  const slider2Ref = useRef(null)

  useEffect(() => {
    setNav1(slider1Ref.current)
    setNav2(slider2Ref.current)
  }, [])

  return (
    <div className="row align-items-xl-center">
      <div className="col-lg-5 col-md-7 col-sm-9">
        <div className="testimonial__image-wrapper position-relative">
          <Slider {...settings} ref={slider1Ref} asNavFor={nav1} className="testimonial__image-active">
            <div className="testimonial__image-item">
              <img alt="img" src="/assets/images/others/testimonial01.jpg" />
            </div>
            <div className="testimonial__image-item">
              <img alt="img" src="/assets/images/others/testimonial02.jpg" />
            </div>
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
      </div>
      <div className="col-lg-7">
        <div className="testimonial__content-wrapper">
          <div className="section__title white-title mb-40">
            <h2 className="title tg-svg">
              What Our <span className="position-relative">
                <span className="svg-icon" data-svg-icon="assets/img/icons/title_shape.svg" id="svg-7" />Students</span>
              <br />
              Say About Us
            </h2>
          </div>
          <Slider
            {...settings}
            ref={slider2Ref}
            arrows={true}
            asNavFor={nav1}
            className="testimonial__content-active testimonial__content-nav"
            focusOnSelect={true}
            slidesToShow={1}
            swipeToSlide={true}>
            <div className="testimonial__content-item">
              <div className="testimonial__content-icon">
                <img alt="img" src="/assets/images/icons/quote.png" />
              </div>
              <p>“ when an unknown printer took a galley of type and scrambled to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic.”</p>
              <div className="testimonial__content-avatar">
                <h5 className="name">Parker Robert</h5>
                <span className="designation">UI Designer</span>
              </div>
            </div>
            <div className="testimonial__content-item">
              <div className="testimonial__content-icon">
                <img alt="img" src="/assets/images/icons/quote.png" />
              </div>
              <p>“ when an unknown printer took a galley of type and scrambled to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic.”</p>
              <div className="testimonial__content-avatar">
                <h5 className="name">Parker Robert</h5>
                <span className="designation">UI Designer</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}
