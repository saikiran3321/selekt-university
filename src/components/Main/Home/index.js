import React, { Component, Fragment } from 'react'
import Banner from './sections/Banner'
import Brand from './sections/Brand'
import About from './sections/About'
import Course from './sections/Course'
import Categories from './sections/Categories'
import Testimonial from './sections/Testimonial'
import Instructor from './sections/Instructor'
import Cta from './sections/Cta'
// import Blog from './sections/Blog'
import Newsletter from './sections/Newsletter'

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <main className="main-area fix">
          <Banner />
          <Brand />
          <About />
          <Course />
          <Categories />
          <Testimonial />
          <Instructor />
          <Cta />
          {/* <Blog /> */}
          <Newsletter />
        </main>
      </Fragment>
    )
  }
}
