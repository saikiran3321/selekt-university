import React, { Component } from 'react'
import PortfolioFilter from '../../../elements/PortfolioFilter'

export default class Course1 extends Component {
  render() {
    return (
      <section className="courses-area section-pt-120 section-pb-90">
        <div className="container">
          <PortfolioFilter />
        </div>
        <div className="courses__shapes">
          <div className="courses__shapes-item alltuchtopdown">
            <img alt="shape" src="/assets/images/courses/course_shape01.png" />
          </div>
          <div className="courses__shapes-item alltuchtopdown">
            <img alt="shape" src="/assets/images/courses/course_shape02.png" />
          </div>
        </div>
      </section>
    )
  }
}
