import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import TestimonialSlider from '../sliders/TestimonialSlider'

export default function Testimonial1() {
  return (
    <Fragment>
      <section
        className="testimonial-area testimonial-bg section-py-120"
        style={{ backgroundImage: 'url(/assets/images/bg/testimonial_bg.jpg)' }}>
        <Container>
          <TestimonialSlider />
        </Container>
      </section>
    </Fragment>
  )
}
