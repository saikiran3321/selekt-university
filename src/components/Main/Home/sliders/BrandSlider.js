import React, { Component } from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}

export default class BrandSlider extends Component {
  render() {
    return (
      <Container>
        <Row className="brand-active">
          <Carousel {...settings}>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand01.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand02.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand03.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand04.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand05.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand06.png" />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col className="brand__item">
                <img alt="brand" src="/assets/images/brand/brand07.png" />
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    )
  }
}
