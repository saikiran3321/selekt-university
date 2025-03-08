import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import AllCourses from './allcourses'

export default class Courses extends Component {
  render() {
    return (
      <section className="all-courses-area section-py-120">
        <Container>
          <AllCourses />
        </Container>
      </section>
    )
  }
}
