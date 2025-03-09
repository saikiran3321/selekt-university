import React from 'react'
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'

const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
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

const slide_images = [
  'brand01.png',
  'brand02.png',
  'brand03.png',
  'brand04.png',
  'brand05.png',
  'brand06.png',
  'brand07.png',
]

export default function BrandSlider() {
  return (
    <div className="brand-area">
      <Container>
        <Slider {...settings} className="row brand-active">
          {slide_images.map((brand, index) => (
            <div key={brand} className="col">
              <div className="brand__item">
                <a href="/">
                  <img alt="brand" src={`/assets/images/brand/${brand}`} />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  )
}
